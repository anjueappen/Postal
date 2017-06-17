import * as React from 'react';
import {Posts} from "../../api/posts/post";

interface PostListProps {
    loading:boolean,
    postExists:boolean,
    posts:object[],
};

export class PostListView extends React.SFC<PostListProps>{
    constructor(props:any){
        super(props);
        this.addPost = this.addPost.bind(this)

    }

    addPost(){
        console.log("Adding post");
    }

    render(){
        if(this.props.loading){
            return <div>Loading ... </div>
        }else {
            return <div>
                <button type="button" onClick={this.addPost}> Add post item </button>
                <ul></ul>
            </div>
        }
        // Meteor.subscribe('posts.all', function() {
        //     console.log("Found", Posts.find().count(), "posts");
        // });
        // console.log(Meteor.subscribe('myPosts'));
        // var posts = Posts.find({senderIdentifier: Meteor.userId()});
        // var p = posts.map((post) => {return <li><PostItem name={post.name} deliveryStatus={post.deliveryStatus} /></li>});
        // var p = posts.map((post) => {return <li>{post}</li>});

    }

}
