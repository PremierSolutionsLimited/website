import React, {
  Fragment,
  useReducer,
  useEffect,
  useMemo,
  createContext,
  useContext,
} from "react";
import { ContextLoader } from "../../shared/loaders";
import {
  IContext,
  IContextControllerProps,
  IRegistrationContext,
  IRegistrationContextControllerProps,
} from "./types";
import ClientApollo from "../adapters/clientApollo";
import Auth from "../adapters/cookie.config";
import Registration from "../adapters/registrationCookie";
import SettingsConfig from "./settings";

const AuthContext = createContext(
  [] as (IContext | IContextControllerProps | any)[]
);

const RegistrationContext = createContext(
  [] as (IRegistrationContext | IRegistrationContextControllerProps | any)[]
);

export const useAuthProvider = () => useContext(AuthContext);
export const useRegistrationProvider = () => useContext(RegistrationContext);

const Manipulator = (prevState: any, action: any) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        userToken: action.userToken,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isLoading: false,
        userToken: null,
        isSignout: true,
      };
    default:
      return prevState;
  }
};

const RegistrationManipulator = (prevState: any, action: any) => {
  switch (action.type) {
    case "RESTORE_REGISTRATION":
      return {
        ...prevState,
        status: action.status,
        isLoading: false,
      };
    case "START_REGISTRATION":
      return {
        ...prevState,
        isEnded: false,
        status: action.registrationStatus,
      };
    case "END_REGISTRATION":
      return {
        ...prevState,
        isLoading: false,
        status: null,
        isEnded: true,
      };
    default:
      return prevState;
  }
};

function AppNavigator() {
  const [state, dispatch] = useReducer(Manipulator, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });
  const [registrationState, dispatchRegistration] = useReducer(
    RegistrationManipulator,
    {
      isLoading: true,
      isEnded: false,
      status: null,
    }
  );

  // persist registration data
  useEffect(() => {
    let status: string | null = Registration.getCipher();
    let data;
    if (status) data = JSON.parse(status);
    else data = null;
    dispatchRegistration({ type: "RESTORE_REGISTRATION", status: data });
  }, []);

  // save user token

  useEffect(() => {
    let userToken: string | null = Auth.getCipher();
    let data;
    if (userToken) data = JSON.parse(userToken);
    else data = null;
    dispatch({ type: "RESTORE_TOKEN", userToken: data });
  }, []);

  const authContextController = useMemo(
    () => ({
      signIn: async (token: object): Promise<void> => {
        Auth.setCipher(JSON.stringify(token));
        dispatch({ type: "SIGN_IN", token: token });
      },
      signOut: (): void => {
        Auth.clearCipher();
        dispatch({ type: "SIGN_OUT" });
      },
    }),
    []
  );

  const registrationContextController = useMemo(
    () => ({
      startRegistration: async (registrationStatus: object): Promise<void> => {
        Registration.setCipher(JSON.stringify(registrationStatus));
        dispatchRegistration({
          type: "START_REGISTRATION",
          registrationStatus: registrationStatus,
        });
      },
      endRegistration: (): void => {
        Registration.clearCipher();
        dispatchRegistration({ type: "END_REGISTRATION" });
      },
    }),
    []
  );
  return (
    <Fragment>
      {state.isLoading || registrationState.isLoading ? (
        <ContextLoader />
      ) : (
        <Fragment>
          <AuthContext.Provider value={[authContextController, state]}>
            <RegistrationContext.Provider
              value={[registrationContextController, registrationState]}
            >
              <ClientApollo>
                <SettingsConfig />
              </ClientApollo>
            </RegistrationContext.Provider>
          </AuthContext.Provider>
        </Fragment>
      )}
    </Fragment>
  );
}

export default AppNavigator;
