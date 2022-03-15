import { gql } from "@apollo/client";

export const getTripHistory = gql`
  query (
    $filter: GetTripsFilter
    $skip: Int
    $limit: Int
    $sort: GetTripsSort
    $populate: [String]
  ) {
    trips(
      filter: $filter
      pagination: { skip: $skip, limit: $limit }
      sort: $sort
      populate: $populate
    ) {
      _id
      code
      vehicle {
        color
        model
        make
        registrationNumber
        class {
          icon
          name
        }
      }
      tripType {
        name
        _id
        description
      }
      startTime
      endTime
      pickUpLocation {
        _id
        type
        coordinates
      }
      dropOffLocation {
        _id
        type
        coordinates
      }
      status
      notes
      driverRated
      driverRating
      driverReview
      clientRated
      clientRating
      clientReview
      cancelledAt
      cancelledBecause
      createdAt
      updatedAt
      tripRequest {
      cost {
        totalCost
        items {
          title
          quantity
          cost
        }
      }
    }
    }
    tripsLength(filter: $filter)
  }
`;
