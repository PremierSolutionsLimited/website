export interface IContext {
  isLoading: boolean;
  isSignout: boolean;
  userToken: object;
}

export interface IContextControllerProps {
  signIn: (token: object) => Promise<void>;
  signOut: () => void;
}
