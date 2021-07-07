import { gql } from "@apollo/client";

export const createDriverApplication = gql`
  mutation (
    $lastName: String!
    $firstName: String!
    $otherNames: String!
    $gender: Gender!
    $dob: Date!
    $photograph: String
    $maritalStatus: MaritalStatus
    $numberOfChildren: Int
    $hasLicense: Boolean
    $email: String!
    $phone: String!
    $region: String
    $city: String
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
    $hasAccidents: Boolean
    $hasCrimeRecords: Boolean
    $hasSmartPhone: Boolean
    $canUseMap: Boolean
    $availablity: [Day!]!
    $nameOfSchool: String!
    $schoolStartDate: Date
    $schoolEndDate: Date
    $qualification: String
    $certificateImage: String
    $currentEmploymerName: String
    $currentEmploymentStartDate: Date
    $currentEmploymentEndDate: Date
    $currentEmploymentPositionHeld: String
    $reasonForLeavingCurrentWork: String
    $previousEmploymerName: String
    $previousEmploymentStartDate: Date
    $previousEmploymentEndDate: Date
    $previousPositionHeld: String
    $previousReasonForLeaving: String
  ) {
    createDriverApplication(
      input: {
        lastName: $lastName
        firstName: $firstName
        otherNames: $otherNames
        gender: $gender
        dob: $dob
        photograph: $photograph
        maritalStatus: $maritalStatus
        numberOfChildren: $numberOfChildren
        hasLicense: $hasLicense
        email: $email
        phone: $phone
        region: $region
        city: $city
        residence: $residence
        ghanaPostGps: $ghanaPostGps
        licenseId: $licenseId
        licenseExpiry: $licenseExpiry
        licenseImageFront: $licenseImageFront
        licenseImageBack: $licenseImageBack
        licenseClass: $licenseClass
        drivingExperience: $drivingExperience
        vehicleClasses: $vehicleClasses
        transmissionTypes: $transmissionTypes
        hasAccidents: $hasAccidents
        hasCrimeRecords: $hasCrimeRecords
        hasSmartPhone: $hasSmartPhone
        canUseMap: $canUseMap
        availablity: $availablity
        educationalHistory: {
          nameOfSchool: $nameOfSchool
          startDate: $schoolStartDate
          endDate: $schoolEndDate
          qualification: $qualification
          certificateImage: $certificateImage
        }
        currentEmployment: {
          currentEmployerName: $currentEmploymerName
          startDate: $currentEmploymentStartDate
          endDate: $currentEmploymentEndDate
          positionHeld: $currentEmploymentPositionHeld
          reasonForLeaving: $reasonForLeavingCurrentWork
        }
        previousEmployment: {
          currentEmployerName: $previousEmploymerName
          startDate: $previousEmploymentStartDate
          endDate: $previousEmploymentEndDate
          positionHeld: $previousPositionHeld
          reasonForLeaving: $previousReasonForLeaving
        }
      }
    ) {
      _id
    }
  }
`;
