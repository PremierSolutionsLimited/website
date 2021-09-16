import { gql } from "@apollo/client";

export const GET_SUMMARY = gql`
  query {
    clientSummary {
      totalVehicles
      completedTrips
      totalTripRequests
    }
  }
`;
