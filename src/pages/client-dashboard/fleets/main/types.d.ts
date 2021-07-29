export interface MyFleetInputProp {
  filter?: {
    client?: {
      eq: string;
    };
  };
  pagination: {
    skip: number;
    limit: number;
  };
  sort: {
    _id: string;
  };
  populate: string[];
}

export interface MyFleetOutputProp {
  vehicles: MyFleet[];
  vehiclesLength: number;
}

export interface MyFleet {
  _id: string;
  code: string;
  class: VehicleClass;
  color: string;
  images: string[];
  make: string;
  model: string;
  registrationNumber: string;
  transmissionType: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface VehicleClass {
  _id: string;
  name: string;
  description: string;
  icon: string;
}
