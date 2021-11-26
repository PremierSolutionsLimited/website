import gql from "graphql-tag";

export const tripRequests = gql`
  query ($filter: GetTripRequestsFilter, $pagination: Pagination) {
    tripRequests(
      filter: $filter
      pagination: $pagination
      populate: ["vehicle", "dropOffLocation", "pickUpLocation", "tripType"]
    ) {
      _id
      code
      cost {
        totalCost
        items {
          title
          quantity
          cost
        }
      }
      tripType {
        _id
        name
        description
      }
      expectedEndTime
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
      dropOffLocationName
      passengerAges
      extraPassenger
      status
      notes
      expectedStartTime
      vehicle {
        _id
        code
        class {
          _id
          name
          description
        }
        transmissionType
        color
        images
        make
        model
        registrationNumber
      }
    }
    tripRequestsLength
  }
`;
