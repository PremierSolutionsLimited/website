import gql from "graphql-tag";

export const tripRequests = gql`
  query ($filter: GetTripRequestsFilter, $pagination: Pagination) {
    tripRequests(
      filter: $filter
      pagination: $pagination
      populate: ["vehicle", "pickUpLocation", "tripType"]
    ) {
      _id
      code
      quote {
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
      timeLogs {
        startTime
        endTime
      }
      pickUpLocation {
        _id
        type
        coordinates
      }
      dropOffLocations
      pickUpLocationName
      passengerAges
      extraPassenger
      status
      notes
      expectedStartTime
      expectedEndTime
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
      checklist {
        damagesOnVehicle {
          description
          images
        }
        valuablesInVehicle {
          description
          images
        }
        clientComments
        registeredVehicle
        validRoadWorthySticker
        validInsurance
        emergencyTriangle
        fireExtinguisher
        spareTyre
      }
      createdAt
    }
    tripRequestsLength
  }
`;
