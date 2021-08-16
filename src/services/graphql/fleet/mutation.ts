import { gql } from "@apollo/client";

export const createVehicle = gql`
  mutation (
    $client: ID
    $class: ID
    $transmissionType: TransmissionType
    $color: String
    $images: [String]
    $make: String
    $model: String
    $registrationNumber: String
  ) {
    createVehicle(
      input: {
        client: $client
        class: $class
        transmissionType: $transmissionType
        color: $color
        images: $images
        model: $model
        make: $make
        registrationNumber: $registrationNumber
      }
    ) {
      _id
    }
  }
`;

export const updateVehicle = gql`
  mutation (
    $vehicleId: ID!
    $class: ID
    $transmissionType: TransmissionType
    $color: String
    $images: [String]
    $make: String
    $model: String
    $registrationNumber: String
  ) {
    updateVehicle(
      input: {
        vehicleId: $vehicleId
        class: $class
        transmissionType: $transmissionType
        color: $color
        images: $images
        model: $model
        make: $make
        registrationNumber: $registrationNumber
      }
    ) {
      _id
    }
  }
`;

export const createTripRequest = gql`
  mutation (
    $client: ID
    $vehicle: ID
    $tripType: ID
    $expectedStarTime: Date
    $expectedEndTime: Date
    $pickupType: LocationType!
    $pickupCordinates: [Float!]!
    $pickupLocationName: String
    $dropOffType: LocationType!
    $dropOffCordinates: [Float!]!
    $dropOffLocationName: String
    $passengerAges: [PassengerAge]
    $extraPassenger: Boolean
    $notes: String
  ) {
    createTripRequest(
      input: {
        client: $client
        vehicle: $vehicle
        tripType: $tripType
        expectedStartTime: $expectedStarTime
        expectedEndTime: $expectedEndTime
        pickUpLocation: { type: $pickupType, coordinates: $pickupCordinates }
        pickUpLocationName: $pickupLocationName
        dropOffLocation: { type: $dropOffType, coordinates: $dropOffCordinates }
        dropOffLocationName: $dropOffLocationName
        passengerAges: $passengerAges
        notes: $notes
        extraPassenger: $extraPassenger
      }
    ) {
      _id
    }
  }
`;
