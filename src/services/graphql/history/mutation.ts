import { gql } from "@apollo/client";

export const rateDriver = gql`
  mutation ($tripId: ID!, $rating: Float!, $review: String) {
    clientRateTrip(
      input: { tripId: $tripId, rating: $rating, review: $review }
    ) {
      _id
    }
  }
`;


export const reportIncident = gql`
  mutation CreateIncident($input: CreateIncidentInput!) {
    createIncident(input: $input) {
      _id
      code
      createdAt
    }
  }
`;