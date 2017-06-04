import {IAddress, ILatLon} from "./utils";

export interface IPost{
  name: string,
  senderIdentifier: string,
  delivererIdentifier: string,
  deliveryStatus: string,
  currentLocation: ILatLon,
  source: IAddress,
  destination: IAddress
};
