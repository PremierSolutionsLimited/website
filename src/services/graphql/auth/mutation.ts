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
