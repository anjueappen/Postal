import * as React from 'react';

interface PostItemsProps {
    loading:boolean,
    postExists:boolean,
    posts:object[],
}

export class PostListView extends React.Component<PostItemsProps>{
    constructor(props:any){
        super(props);
        this.addPost = this.addPost.bind(this)
    }

    addPost(){
        console.log("Adding post");
    }

    render(){
        console.log(this.props)
        if(this.props.loading){
            return <div>Loading...</div>
        }

        // var posts = Posts.find({senderIdentifier: Meteor.userId()});
        // var p = posts.map((post) => {return <li><PostItem name={post.name} deliveryStatus={post.deliveryStatus} /></li>});

        let p = this.props.posts.map((post) => {return <li>{post.name}</li>});
        return <div>
            <button type="button" onClick={this.addPost}> Add post item </button>
            <ul>{p}</ul>
        </div>
    }
}


