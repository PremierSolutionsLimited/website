import { gql } from "@apollo/client";

export const currentClient = gql`
  query ($populate: [String]) {
    currentClient(populate: $populate) {
      client {
        _id
        code
        username
        pinCode
        title
        lastName
        otherNames
        firstName
        gender
        dob
        phone
        photograph
        nationality
        email
        residence
        ghanaPostGps
        idType
        idNumber
        idIssueDate
        idExpiryDate
        emergencyContacts {
          name
          relationship
          telephone
          phone
          address
        }
        defaultPreferredGender
        suspended
        createdAt
        updatedAt
      }
      token
    }
  }
`;
