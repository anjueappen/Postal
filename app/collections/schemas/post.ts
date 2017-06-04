import {Document, Schema, Model, model} from "mongoose";
import {IPost} from "../interfaces/post";
import {IAddress, ILatLon} from "../interfaces/utils";

//Model Class has "actions" of a class
export interface IPostModel extends IPost, Document {

  //Mehtod to implement that returns fullname
  // fullname(): string;

  // currentLocation(): object;
  // closestZipCode(): string;
}


//Must match IUser Interface
export var PostSchema: Schema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },

  name:{
    type: String,
    required: true
  },

  phone:{
    type: String,
    required: true
  },

  email:{
    type: String,
    required: true
  },

  password:{
    type: String,
    required: true
  },
});

// // Pre save hook to populate the createdAt date
// UserSchema.pre("save", next => {
//   let now = new Date();
//   if(!this.createdAt){
//     this.createdAt = now;
//   }
//   next()
// });

/* Define instance methods*/
// PostSchema.methods.fullname = function(): string {
//     return this.name;
// };

export const User: Model<IPostModel> = model<IPostModel>("User", PostSchema);
