import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {AddressSchema} from './utils';

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
