export interface CreateClientInputProp {
  username: string;
  title: string;
  lastName: string;
  firstName: string;
  gender: string;
  otherNames: string;
  dob: Date;
  photograph?: string;
  phone: string;
  email: string;
  nationality: string;
  residence: string;
  ghanaPostGps: string;
  defaultPreferredGender: string[];
  idType: string;
  idNumber: string;
  idIssueDate: Date;
  idExpiryDate: Date;
  emergencyContacts: EmergencyContact[];
}

export interface CreateClientOutputProp {
  createClient: {
    _id: string;
  };
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  telephone: string;
  phone: string;
  address: string;
}
