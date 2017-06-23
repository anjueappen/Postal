import {Post} from "../interfaces/post";
import createCollection from "../util/createCollection";


export const Posts: Mongo.Collection<Post> = createCollection<Post>('posts');
