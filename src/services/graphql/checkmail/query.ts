import gql from "graphql-tag";

export const checkClientMail = gql`
  query ($filter: CheckMailFilter!) {
    checkClientMail(filter: $filter)
  }
`;
export const checkDriverMail = gql`
  query ($filter: CheckMailFilter!) {
    checkClientMail(filter: $filter)
  }
`;
