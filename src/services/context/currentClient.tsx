import * as React from "react";
import { useQuery } from "@apollo/client";
import { CURRENT_CLIENT } from "../../services/graphql/auth";
import { ContextLoader } from "../../shared/loaders";
import { Client, CurrentClientOutputProps } from "./types";

export const CurrentClientContext = React.createContext<Client | undefined>(
  {} as Client
);

const CurrentClientComponent: React.FC = ({ children }) => {
  const { data, loading } = useQuery<CurrentClientOutputProps, any>(
    CURRENT_CLIENT
  );

  return (
    <React.Fragment>
      {loading ? (
        <React.Fragment>
          <ContextLoader />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <CurrentClientContext.Provider value={data?.currentClient?.client}>
            {children}
          </CurrentClientContext.Provider>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export const useCurrentClient = () => React.useContext(CurrentClientContext);

export default CurrentClientComponent;
