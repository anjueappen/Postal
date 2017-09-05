import * as React from 'react';
import {PostItem} from "../components/PostItem";

interface PostItemsProps {
    loading:boolean,
    postExists:boolean,
    posts:PostItem[],
}

export class PostListView extends React.Component<PostItemsProps>{
    name:string;
    deliveryStatus: any;
    
    constructor(props:any){
        super(props);
        this.addPost = this.addPost.bind(this)
    }

    addPost(){
        console.log("Adding post");
    }

    render(){
        console.log(this.props);
        if(this.props.loading){
            return <div>Loading...</div>
        }

        // var posts = Posts.find({senderIdentifier: Meteor.userId()});
        // var p = posts.map((post) => {return <li><PostItem name={post.name} deliveryStatus={post.deliveryStatus} /></li>});

        let p = this.props.posts.map((post) => {return <li><PostItem name={post.name}
                                                                     deliveryStatus={post.deliveryStatus}/></li>});
        return <div>
            <button type="button" onClick={this.addPost}> Add post item </button>
            <ul>{p}</ul>

            <div className="ui center aligned basic segment">
                <div className="ui left icon action input">
                    <i className="search icon"/>
                    <input type="text" placeholder="Order #"/>
                    <div className="ui blue submit button">Search</div>
                </div>
                <div className="ui horizontal divider">
                    Or
                </div>
                <div className="ui teal labeled icon button">
                    Create New Order
                    <i className="add icon"/>
                </div>
            </div>
        </div>
    }
}



/*


 */
