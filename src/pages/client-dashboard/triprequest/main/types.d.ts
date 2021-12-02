import { MyFleet } from "../../fleets/main/types";
export interface TripHistoryInputProp {
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

export interface TripHistoryOutputProp {
  tripRequests: TripHistory[];
  tripRequestsLength: number;
}

export interface TripHistory {
  _id: string;
  code: string;
  vehicle: MyFleet;
  tripType: TripType;
  startTime: Date;
  expectedStartTime: Date;
  endTime: Date;
  pickUpLocation: Location;
  dropOffLocation: Location;
  status: string;
  notes: string;
  driverRated: boolean;
  driverRating: number;
  driverReview: string;
  clientRated: boolean;
  clientRating: number;
  clientReview: string;
  dropOffLocationName: string;
  pickUpLocationName: string;
  cancelledAt: Date;
  cancelledBecause: string;
  createdAt: Date;
  cost: {
    totalCost: string;
    items: {
      title: string;
      quantity: number;
      cost: string;
    };
  };
  updatedAt: Date;
}

export interface TripType {
  name: string;
  _id: string;
  description: string;
}

export interface Location {
  _id: string;
  type: string;
  coordinates: number[];
}
