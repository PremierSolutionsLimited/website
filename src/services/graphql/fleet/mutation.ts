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
    $expectedStartTime: Date
    $expectedEndTime: Date
    $pickUpLocation: LocationInput
    $dropOffLocation: LocationInput
    $pickUpLocationName: String
    $dropOffLocationName: String
    $passengerAges: [PassengerAge]
    $extraPassenger: Boolean
    $notes: String
    $checklist: TripChecklistInput
  ) {
    createTripRequest(
      input: {
        client: $client
        vehicle: $vehicle
        tripType: $tripType
        expectedStartTime: $expectedStartTime
        expectedEndTime: $expectedEndTime
        pickUpLocation: $pickUpLocation
        pickUpLocationName: $pickUpLocationName
        dropOffLocation: $dropOffLocation
        dropOffLocationName: $dropOffLocationName
        passengerAges: $passengerAges
        notes: $notes
        extraPassenger: $extraPassenger
        checklist: $checklist
      }
    ) {
      payment {
        authorizationUrl
      }
    }
  }
`;

export const getTripQuote = gql`
  mutation (
    $client: ID
    $vehicle: ID
    $tripType: ID
    $expectedStartTime: Date
    $expectedEndTime: Date
    $pickUpLocation: LocationInput
    $dropOffLocation: LocationInput
    $pickUpLocationName: String
    $dropOffLocationName: String
    $passengerAges: [PassengerAge]
    $extraPassenger: Boolean
    $notes: String
    $checklist: TripChecklistInput
  ) {
    getTripQuote(
      input: {
        client: $client
        vehicle: $vehicle
        tripType: $tripType
        expectedStartTime: $expectedStartTime
        expectedEndTime: $expectedEndTime
        pickUpLocation: $pickUpLocation
        pickUpLocationName: $pickUpLocationName
        dropOffLocation: $dropOffLocation
        dropOffLocationName: $dropOffLocationName
        passengerAges: $passengerAges
        notes: $notes
        extraPassenger: $extraPassenger
        checklist: $checklist
      }
    ) {
      totalCost
    }
  }
`;
