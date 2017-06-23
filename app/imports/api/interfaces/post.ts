import {IAddress, ILatLon} from "../util/utilInterfaces";

export enum DeliveryStatus {Delivered, InTransit, Pending}

export interface Post{
  name: string,
  senderIdentifier?: string,
  delivererIdentifier?: string,
  deliveryStatus: DeliveryStatus,
  currentLocation?: ILatLon,
  source?: IAddress,
  destination?: IAddress
}

