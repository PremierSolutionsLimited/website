import { MyFleet } from "../../fleets/main/types";
import { TDamageType } from "../../fleets/book/components/damage/main";
import { TValuableType } from "../../fleets/book/components/valuables/main";
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
  expectedEndTime: Date;
  endTime: Date;
  pickUpLocationName: string;
  dropOffLocationName: string;
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
  cancelledAt: Date;
  cancelledBecause: string;
  createdAt: Date;
  quote: {
    totalCost: string;
    items: {
      title: string;
      quantity: number;
      cost: string;
    };
  };
  checklist: {
    damagesOnVehicle?: TDamageType[];
    valuablesInVehicle?: TValuableType[];
    clientComments?: string;
    registeredVehicle?: boolean;
    validRoadWorthySticker?: boolean;
    validInsurance?: boolean;
    emergencyTriangle?: boolean;
    fireExtinguisher?: boolean;
    spareTyre?: boolean;
  }
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
