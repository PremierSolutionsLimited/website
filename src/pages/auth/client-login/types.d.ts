import { Client } from "../../../services/context/types";

export interface LoginInputProps {
  email: string;
  password: string;
}

export interface LoginOutputProps {
  loginClient: {
    token: string;
    client: Client;
  };
}
