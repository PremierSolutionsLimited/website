import { gql } from "@apollo/client";

export const loginClient = gql`
  mutation ($email: String!, $password: String!) {
    loginClient(input: { password: $password, username: $email }) {
      client {
        _id
      }
      token
    }
  }
`;

export const changePassword = gql`
  mutation ($oldPassword: String!, $newPassword: String!) {
    updateClientPassword(
      input: { oldPassword: $oldPassword, newPassword: $newPassword }
    ) {
      client {
        _id
      }
      token
    }
  }
`;

export const sendClientCode = gql`
  mutation ($username: String!, $medium: MessageMedium!) {
    sendClientCode(input: { username: $username, medium: $medium }) {
      token
      client {
        _id
        username
      }
    }
  }
`;
