import { gql } from "@apollo/client";

export const getTripHistory = gql`
  query (
    $filter: GetTripsFilter
    $pagination: Pagination
    $sort: GetTripsSort
    $populate: [String]
  ) {
    trips(
      filter: $filter
      pagination: $pagination
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
      finalCost {
        finalCost
        items {
          title
          quantity
          cost
        }
      }
    }
    tripsLength(filter: $filter)
  }
`;

export const getTripHistoryLite = gql`
  query (
    $filter: GetTripsFilter
    $pagination: Pagination
    $sort: GetTripsSort
    $populate: [String]
  ) {
    trips(
      filter: $filter
      pagination: $pagination
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
      finalCost {
        finalCost
      }
      createdAt
    }
    tripsLength(filter: $filter)
  }
`