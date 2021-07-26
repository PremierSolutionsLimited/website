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
      }
    ) {
      _id
    }
  }
`;
