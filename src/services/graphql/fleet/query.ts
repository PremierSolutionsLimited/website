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
