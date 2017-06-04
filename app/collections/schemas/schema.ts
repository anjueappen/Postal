import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {AddressSchema} from './utils';

//TODO git stash pop to get import to simple-ts-schema

export interface IUser {
  name: string;
  phone: string;
  email: string;
  password: string;
}
export const Schema = {
  UserProfile: new SimpleSchema({
      name: {
          type: String,
          label: "User Name",
      },
      phone:{
          type: String,
          label: "User Phone",
      },
      email:{
          type: String,
          label: "User Email",
      },
      password:{
          type: String,
          label: "User Phone",
      }
  }),

  PostItem: new SimpleSchema({
      name:{
        type: String,
        label: "Post Item name"
      },
      sender:{
        type: this.UserProfile,
        label: "Post Sender Profile"
      },
      receiver:{
        type: this.UserProfile,
        label: "Post Receiver Profile"
      },
      deliverer:{
        type: this.UserProfile,
        label: "Post Deliverer Profile"
      },
      source:{
        type:AddressSchema,
        label: "Source Location"
      },
      destination:{
        type: AddressSchema,
        label: "Destination Location"
      }
  }),

};
