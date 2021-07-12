import React, {
  Fragment,
  lazy,
  Suspense,
  useReducer,
  useEffect,
  useMemo,
  createContext,
  useContext,
} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ContextLoader } from "../../shared/loaders";
import { IContext, IContextControllerProps } from "./types";
import ClientApollo from "../adapters/clientApollo";
import Auth from "../adapters/cookie.config";
import ProtectedRoutes from "../adapters/protectedRoutes";

const ClientLoginComponent = lazy(
  () => import("../../pages/auth/client-login")
);
const ClientSignupComponent = lazy(
  () => import("../../pages/auth/client-signup")
);
const ClientRegistrationComponent = lazy(
  () => import("../../pages/client-registration")
);
const DriverSignupComponent = lazy(
  () => import("../../pages/auth/driver-signup")
);
const DriverLoginComponent = lazy(
  () => import("../../pages/auth/driver-login")
);
const DriverRegistationComponent = lazy(
  () => import("../../pages/driver-registration")
);
const LandingPageComponent = lazy(() => import("../../pages/landingpage"));

const AuthContext = createContext(
  [] as (IContext | IContextControllerProps | any)[]
);
export const useAuthProvider = () => useContext(AuthContext);

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

const SettingsConfig = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Suspense fallback={ContextLoader()}>
          <Switch>
            <Route
              component={ClientLoginComponent}
              path={"/client-login"}
              exact={true}
            />
            <Route
              component={ClientSignupComponent}
              path={"/client-signup"}
              exact={true}
            />
            <Route
              component={DriverSignupComponent}
              path={"/driver-signup"}
              exact={true}
            />
            <Route
              component={DriverLoginComponent}
              path={"/driver-login"}
              exact={true}
            />
            <ProtectedRoutes
              component={DriverRegistationComponent}
              path={"/driver-registration"}
              exact={true}
            />
            <ProtectedRoutes
              component={ClientRegistrationComponent}
              path={"/client-registration"}
              exact={true}
            />
            <Route component={LandingPageComponent} path={"/"} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Fragment>
  );
};

function AppNavigator() {
  const [state, dispatch] = useReducer(Manipulator, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });

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
  return (
    <Fragment>
      {state.isLoading ? (
        <ContextLoader />
      ) : (
        <Fragment>
          <AuthContext.Provider value={[authContextController, state]}>
            <ClientApollo>
              <SettingsConfig />
            </ClientApollo>
          </AuthContext.Provider>
        </Fragment>
      )}
    </Fragment>
  );
}

export default AppNavigator;
