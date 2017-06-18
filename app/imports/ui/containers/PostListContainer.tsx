import * as React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import {Posts} from "../../api/posts/post";
import { PostListView } from '../views/PostListView'

export const PostListContainer = createContainer(() => {
    const postsHandle = Meteor.subscribe('posts.all');
    const loading = !postsHandle.ready();
    const posts = Posts.find();
    const postExists = !loading && !!posts;
    return {
        loading:loading,
        postExists: postExists,
        posts: postExists ? posts.fetch() : [],
    };
}, PostListView);
