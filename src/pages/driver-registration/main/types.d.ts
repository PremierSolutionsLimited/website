export interface CreateApplicationInputProp {
  title: string;
  lastName: string;
  firstName: string;
  otherNames: string;
  gender: string;
  dob: Date;
  photograph?: string;
  maritalStatus: string;
  numberOfChildren: number;
  hasLicense: Boolean;
  email: string;
  phone: string;
  region: string;
  city: string;
  residence: string;
  ghanaPostGps?: string;
  licenseId: string;
  licenseExpiryDate: Date;
  licenseImageFront: string;
  licenseImageBack: string;
  licenseClass: string;
  drivingExperience: number;
  vehicleClasses?: string;
  transmissionTypes: string[];
  hasAccidents: boolean;
  hasCrimeRecords: boolean;
  hasSmartPhone: boolean;
  canUseMap: boolean;
  availablity: string[];
  nameOfSchool: string;
  schoolStartDate?: Date;
  schoolEndDate: Date;
  qualification: string;
  certificateImage?: string;
  currentEmploymerName: string;
  currentEmploymentStartDate: Date;
  currentEmploymentEndDate: Date;
  currentEmploymentPositionHeld: string;
  reasonForLeavingCurrentWork?: string;
  previousEmploymerName: string;
  previousEmploymentStartDate: Date;
  previousEmploymentEndDate: Date;
  previousPositionHeld: string;
  previousReasonForLeaving: string;
}

export interface CreateApplicationOuputProp {
  createDriverApplication: {
    _id: string;
  };
}
