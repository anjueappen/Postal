import {Mongo} from 'meteor/mongo';
import {IAddress, ILatLon} from "./utils/utilInterfaces";
import createCollection from "./utils/createCollection";

export interface Post{
  name: string,
  senderIdentifier?: string,
  delivererIdentifier?: string,
  deliveryStatus: string,
  currentLocation: ILatLon,
  source: IAddress,
  destination: IAddress
};

export const Posts: Mongo.Collection<Post> = createCollection<Post>('posts');


//Get get my posts
Meteor.publish('myPosts', function(): Mongo.Cursor<Post>{
  //TODO Specify only public feilds in find() call ..change schema
  return Posts.find({senderIdentifier: this.userId()});
});

//Get open posts
Meteor.publish('openPosts', function(): Mongo.Cursor<Post> {
  //TODO Specify only public feilds in find() call ..change schema
  return Posts.find({delivererIdentifier: {$exists: false}});
})

Meteor.publish('addPost', function(post): Mongo.Cursor<Post> {
  //TODO Specify only public feilds in find() call ..change schema
  post.senderIdentifier = this.userId();
  return Posts.insert(post);
})
