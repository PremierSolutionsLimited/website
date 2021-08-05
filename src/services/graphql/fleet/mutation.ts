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
