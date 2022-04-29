import gql from "graphql-tag";

export const checkClientMail = gql`
  query ($filter: CheckMailFilter!) {
    checkClientMail(filter: $filter)
  }
`;
export const checkDriverMail = gql`
  query ($filter: CheckMailFilter!) {
    checkDriverMail(filter: $filter)
  }
`;

export const checkDriverPhone = gql`
  query Query($filter: CheckPhoneFilter!) {
  checkDriverPhone(filter: $filter)
}
`

export const checkClientPhone = gql`
  query Query($filter: CheckPhoneFilter!) {
  checkClientPhone(filter: $filter)
}
`
