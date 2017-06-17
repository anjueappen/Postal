import { createContainer } from 'meteor/react-meteor-data';
import {PostListView} from '../views/PostListView.tsx';
import {Posts} from "../../api/posts/post";

export default PostListContainer = createContainer((attributes) => {
    const postHandle = Meteor..subscribe('posts.all')
    const loading = !postHandle.ready();
    const posts = Posts.find(attributes);
    const postExists = !loading && !!posts;

    return{
        loading: loading,
        postExists: postExists,
        posts: posts.fetch(),
    }

}, PostListView);

