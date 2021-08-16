import { EmergencyContact } from "../../client-registration/main/types";
import { DependentsInputProp } from "../bones/types";

export interface CreateApplicationInputProp {
  title: string;
  lastName: string;
  firstName: string;
  otherNames: string;
  gender: string;
  dob: Date;
  photograph?: string;
  maritalStatus?: string;
  numberOfChildren?: number;
  hasLicense?: Boolean;
  email: string;
  phone: string;
  region?: string;
  city?: string;
  residence?: string;
  ghanaPostGps?: string;
  licenseId?: string;
  licenseIssueDate?: Date;
  licenseExpiryDate?: Date;
  licenseImageFront?: string;
  licenseImageBack?: string;
  licenseClass?: string;
  drivingExperience?: number;
  vehicleClasses?: string;
  transmissionTypes: string[];
  hasAccidents?: boolean;
  hasCrimeRecords?: boolean;
  hasSmartPhone?: boolean;
  canUseMap?: boolean;
  availablity?: string[];
  educationalHistory: {
    nameOfSchool: string;
    level: string;
    startDate?: Date;
    endDate: Date;
  };
  currentEmployment: {
    currentEmployerName: string;
    startDate: Date;
    endDate: Date;
    positionHeld: string;
    reasonForLeaving?: string;
  };
  previousEmployment: {
    currentEmployerName: string;
    startDate: Date;
    endDate: Date;
    positionHeld: string;
    reasonForLeaving: string;
  };
  emergencyContacts: EmergencyContact[];
  dependents: DependentsInputProp[];
  bankDetails: {
    sortCode: string;
    nameOfBank: string;
    nameOfBankBranch: string;
    accountNumber: string;
    ssnitNumber: string;
    momoNumber: string;
  };
  nextOfKin: {
    name: string;
    relationship: string;
    telephone: string;
    phone: string;
    address: string;
  };
  ghanaCardId: string;
  ghanaCardIssueDate: Date;
  ghanaCardExpiryDate: Date;
  ghanaCardImageFont: string;
  ghanaCardImageBack: string;
}

export interface CreateApplicationOuputProp {
  createDriverApplication: {
    _id: string;
  };
}
