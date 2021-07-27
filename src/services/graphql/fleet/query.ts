import { gql } from "@apollo/client";

export const getVehicleClasses = gql`
  query (
    $filter: GetVehicleClassesFilter
    $search: SearchOperator
    $sort: GetVehicleClassesSort
    $populate: [String]
  ) {
    vehicleClasses(
      filter: $filter
      search: $search
      sort: $sort
      populate: $populate
    ) {
      _id
      name
      description
      licenseClasses
      icon
      createdAt
      updatedAt
      deleted
    }
    vehicleClassesLength(filter: $filter)
  }
`;

export const getMyFleet = gql`
  query (
    $filter: GetVehiclesFilter
    $skip: Int
    $limit: Int
    $sort: GetVehiclesSort
    $populate: [String]
  ) {
    vehicles(
      filter: $filter
      pagination: { skip: $skip, limit: $limit }
      sort: $sort
      populate: $populate
    ) {
      _id
      code
      class {
        _id
        name
        description
        icon
      }
      color
      images
      make
      model
      registrationNumber
      transmissionType
      createdAt
      updatedAt
    }
    vehiclesLength(filter: $filter)
  }
`;
