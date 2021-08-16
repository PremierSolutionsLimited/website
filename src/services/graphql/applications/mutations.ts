import { gql } from "@apollo/client";

export const createDriverApplication = gql`
  mutation (
    $title: Title!
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
    $licenseId: String
    $licenseIssueDate: Date
    $licenseExpiryDate: Date
    $licenseImageFront: String
    $licenseImageBack: String
    $licenseClass: LicenseClass
    $drivingExperience: Int
    $vehicleClasses: [ID]
    $transmissionTypes: [TransmissionType!]!
    $hasAccidents: Boolean
    $hasCrimeRecords: Boolean
    $hasSmartPhone: Boolean
    $canUseMap: Boolean
    $availablity: [Day!]!
    $educationalHistory: EducationalHistoryInput
    $currentEmployment: WorkHistoryInput
    $previousEmployment: WorkHistoryInput
    $dependents: [DependantInput]
    $emergencyContacts: [EmergencyContactInput]
    $nextOfKin: EmergencyContactInput
    $bankDetails: BankDetailsInput
    $ghanaCardId: String
    $ghanaCardIssueDate: Date
    $ghanaCardExpiryDate: Date
    $ghanaCardImageFont: String
    $ghanaCardImageBack: String
  ) {
    createDriverApplication(
      input: {
        title: $title
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
        licenseIssueDate: $licenseIssueDate
        licenseExpiryDate: $licenseExpiryDate
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
        educationalHistory: $educationalHistory
        currentEmployment: $currentEmployment
        previousEmployment: $previousEmployment
        emergencyContacts: $emergencyContacts
        dependents: $dependents
        bankDetails: $bankDetails
        nextOfKin: $nextOfKin
        ghanaCardId: $ghanaCardId
        ghanaCardIssueDate: $ghanaCardIssueDate
        ghanaCardExpiryDate: $ghanaCardExpiryDate
        ghanaCardImageFront: $ghanaCardImageFont
        ghanaCardImageBack: $ghanaCardImageBack
      }
    ) {
      _id
    }
  }
`;

export const createClient = gql`
  mutation (
    $username: String
    $title: Title
    $lastName: String!
    $firstName: String!
    $otherNames: String
    $gender: Gender!
    $dob: Date!
    $photograph: String
    $email: String!
    $phone: String!
    $nationality: String!
    $residence: String
    $ghanaPostGps: String
    $defaultPreferredGender: [Gender]
    $idType: String
    $idNumber: String
    $idIssueDate: Date
    $idExpiryDate: Date
    $emergencyContacts: [EmergencyContactInput]
    $password: String
  ) {
    createClient(
      input: {
        username: $username
        title: $title
        lastName: $lastName
        firstName: $firstName
        otherNames: $otherNames
        gender: $gender
        dob: $dob
        photograph: $photograph
        phone: $phone
        email: $email
        nationality: $nationality
        residence: $residence
        ghanaPostGps: $ghanaPostGps
        defaultPreferredGender: $defaultPreferredGender
        idType: $idType
        idNumber: $idNumber
        idIssueDate: $idIssueDate
        idExpiryDate: $idExpiryDate
        emergencyContacts: $emergencyContacts
        password: $password
      }
    ) {
      _id
    }
  }
`;
