import {Mongo} from 'meteor/mongo';
import {IAddress, ILatLon} from "../utils/utilInterfaces";
import createCollection from "../utils/createCollection";

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
export const Posts: Mongo.Collection<Post> = createCollection<Post>('posts');



