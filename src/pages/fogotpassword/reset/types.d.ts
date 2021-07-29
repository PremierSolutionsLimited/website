export interface ResetPasswordInput {
  newPassword;
}

export interface ResetPasswordOutput {
  resetClientPassword: {
    token: string;
    client: {
      _id: string;
      username: string;
    };
  };
}
