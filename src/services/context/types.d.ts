export interface IContext {
  isLoading: boolean;
  isSignout: boolean;
  userToken: object;
}

export interface IContextControllerProps {
  signIn: (token: object) => Promise<void>;
  signOut: () => void;
}

export interface IRegistrationContext {
  isLoading: boolean;
  isEnded: boolean;
  status: object;
}

export interface IRegistrationContextControllerProps {
  startRegistration: (token: object) => Promise<void>;
  endRegistration: () => void;
}
