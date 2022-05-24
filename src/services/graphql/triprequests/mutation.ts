import { gql } from "@apollo/client";

export const updateChecklist = gql`
  mutation UpdateTripChecklist($input: UpdateTripChecklistInput!) {
    updateTripChecklist(input: $input) {
      _id
      code
    }
  }
`;
