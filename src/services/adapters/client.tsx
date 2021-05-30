import { FC, Fragment } from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
  from,
  HttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Auth, { BASE_URL } from "./cookie.config";
import { useAuthProvider } from "../context";
import { useToasts } from "react-toast-notifications";

const ClientApollo: FC = ({ children }) => {
  const [{ signOut }] = useAuthProvider();
  const { addToast } = useToasts();
  const httpLink = new HttpLink({
    uri: BASE_URL,
  });

  const authLink = new ApolloLink((operation, forward) => {
    let authorization = null;
    let auth = Auth.getCipher();
    let customHeaders: any = {};
    if (auth) {
      authorization = JSON.parse(auth).token;
      customHeaders.Authorization = authorization;
    }

    operation.setContext({
      headers: {
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
          addToast("Your session expired, please login", {
            appearance: "warning",
          });
        }
      }
    }

    if (networkError) {
      return addToast(networkError?.message, { appearance: "warning" });
    }
  });

  let link = from([authLink, errorLink, httpLink]);

  const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
  });
  return (
    <Fragment>
      <ApolloProvider client={client}> {children}</ApolloProvider>
    </Fragment>
  );
};

export default ClientApollo;
