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
      pickUpLocationName
      dropOffLocationName
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
      checklistMismatch
      checklist {
        valuablesInVehicle {
          reporterResponse {
            description
            images
          }
          confirmerResponse
          reportedBy
        }
        damagesOnVehicle {
          reporterResponse {
            description
            images
          }
          confirmerResponse
          reportedBy
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
      pickUpLocationName
      dropOffLocationName
      status
      createdAt
    }
    tripsLength(filter: $filter)
  }
`;
