import { gql } from "@apollo/client";

export const loginClient = gql`
  mutation ($username: String!, $password: String!) {
    loginClient(input: { password: $password, username: $username }) {
      client {
        _id
      }
      token
    }
  }
`;
