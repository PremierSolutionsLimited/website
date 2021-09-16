export interface UpdateCurrentClientInputProp {
  firstName: string;
  lastName: string;
  otherNames: string;
  username: string;
  email: string;
  phone: string;
  photograph: string;
}

export interface UpdateCurrentClientOutputProp {
  updateCurrentClient: {
    token: string;
  };
}
