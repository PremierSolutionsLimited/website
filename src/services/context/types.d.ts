import { EmergencyInputProp } from "../../pages/client-registration/bones/types";

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

export interface CurrentClientOutputProps {
  currentClient: {
    token: string;
    client: Client;
  };
}

export interface Client {
  _id: string;
  code: string;
  username: string;
  pinCode: string;
  title: string;
  lastName: string;
  otherNames: string;
  firstName: string;
  gender: string;
  dob: Date;
  phone: string;
  photograph: string;
  nationality: string;
  email: string;
  residence: string;
  ghanaPostGps: string;
  idType: string;
  idNumber: string;
  idIssueDate: Date;
  idExpiryDate: Date;
  emergencyContacts: EmergencyInputProp[];
  defaultPreferredGender: string[];
  suspended: boolean;
  createdAt: Date;
  updatedAt: Date;
}
