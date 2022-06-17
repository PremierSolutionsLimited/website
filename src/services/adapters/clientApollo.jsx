import { Fragment } from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
  from,
  HttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import {offsetLimitPagination} from '@apollo/client/utilities';
import Auth, { BASE_URL } from "./cookie.config";
import { useAuthProvider } from "../context";
import toast from "react-hot-toast";

const ClientApollo = ({ children }) => {
  const [{ signOut }] = useAuthProvider();
  const httpLink = new HttpLink({
    uri: BASE_URL,
  });

  const authLink = new ApolloLink((operation, forward) => {
    let authorization = null;
    let auth = Auth.getCipher();
    let customHeaders = {};
    if (auth) {
      authorization = JSON.parse(auth).token;
      customHeaders.Authorization = authorization;
    }

    operation.setContext({
      headers: {
        "phoenix-origin": "CLIENT_WEB",
        ...customHeaders,
      },
    });
    return forward(operation);
  });

  const errorLink = onError(({ networkError, graphQLErrors }) => {
    if (graphQLErrors) {
      if (graphQLErrors?.length > 0) {
        if (graphQLErrors[0].message === "AuthorizationExpired") {
          signOut();
          return toast.error("Oops... Your session expired");
        }
      }
    }

    if (networkError) {
      return toast.error(networkError.message);
    }
  });

  let link = from([authLink, errorLink, httpLink]);

  const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            notifications: offsetLimitPagination()
          }
        }
      }
    }),
  });
  return (
    <Fragment>
      <ApolloProvider client={client}> {children}</ApolloProvider>
    </Fragment>
  );
};

export default ClientApollo;
