import * as React from "react";
import { useQuery } from "@apollo/client";
import { CURRENT_CLIENT } from "../../services/graphql/auth";
import { ContextLoader } from "../../shared/loaders";
import { ContextValue, CurrentClientOutputProps } from "./types";

export const CurrentClientContext = React.createContext({} as ContextValue);

const CurrentClientComponent: React.FC = ({ children }) => {
  const { data, loading, refetch } = useQuery<
    CurrentClientOutputProps | undefined,
    any
  >(CURRENT_CLIENT);

  return (
    <React.Fragment>
      {loading ? (
        <React.Fragment>
          <ContextLoader />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <CurrentClientContext.Provider
            value={{
              refetch: refetch,
              currentUser: data?.currentClient?.client,
            }}
          >
            {children}
          </CurrentClientContext.Provider>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export const useCurrentClient = () => React.useContext(CurrentClientContext);

export default CurrentClientComponent;
