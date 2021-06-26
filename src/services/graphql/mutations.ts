import { gql } from "@apollo/client";

export const createDriverApplication = gql`
  mutation (
    $name: String!
    $gender: Gender!
    $dob: Date!
    $photograph: String
    $email: String!
    $phone: String!
    $residence: String
    $ghanaPostGps: String
    $licenseId: String!
    $licenseExpiry: Date!
    $licenseImageFront: String!
    $licenseImageBack: String!
    $licenseClass: LicenseClass!
    $drivingExperience: Int
    $vehicleClasses: [ID]
    $transmissionTypes: [TransmissionType!]!
    $availablity: [Day!]!
  ) {
    createDriverApplication(
      input: {
        name: $name
        gender: $gender
        dob: $dob
        photograph: $photograph
        email: $email
        phone: $phone
        residence: $residence
        ghanaPostGps: $ghanaPostGps
        licenseId: $licenseId
        licenseExpiry: $licenseExpiry
        licenseImageBack: $licenseImageBack
        licenseImageFront: $licenseImageFront
        licenseClass: $licenseClass
        drivingExperience: $drivingExperience
        vehicleClasses: $vehicleClasses
        transmissionTypes: $transmissionTypes
        availablity: $availablity
      }
    ) {
      _id
    }
  }
`;
