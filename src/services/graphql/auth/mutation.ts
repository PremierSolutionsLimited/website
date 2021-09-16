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

export const verifyClientCode = gql`
  mutation ($username: String!, $code: String!, $medium: MessageMedium!) {
    verifyClientCode(
      input: { username: $username, medium: $medium, code: $code }
    ) {
      token
      client {
        _id
        username
      }
    }
  }
`;

export const resetClientCode = gql`
  mutation ($newPassword: String!) {
    resetClientPassword(input: { newPassword: $newPassword }) {
      token
      client {
        _id
        username
      }
    }
  }
`;

export const updateCurrentClient = gql`
  mutation (
    $firstName: String
    $lastName: String
    $otherNames: String
    $username: String
    $email: String
    $phone: String
  ) {
    updateCurrentClient(
      input: {
        username: $username
        lastName: $lastName
        firstName: $firstName
        email: $email
        phone: $phone
        otherNames: $otherNames
      }
    ) {
      token
    }
  }
`;
