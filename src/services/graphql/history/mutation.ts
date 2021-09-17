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
