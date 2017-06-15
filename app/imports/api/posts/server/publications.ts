import {Post, Posts} from "../collections/post";


//Get get my posts
Meteor.publish('myPosts', function(): Mongo.Cursor<Post>{
    //TODO Specify only public feilds in find() call ..change schema
    return Posts.find({senderIdentifier: this.userId()});
});

//Get open posts
Meteor.publish('openPosts', function(): Mongo.Cursor<Post> {
    //TODO Specify only public feilds in find() call ..change schema
    return Posts.find({delivererIdentifier: {$exists: false}});
});

Meteor.publish('addPost', function(post): Mongo.Cursor<Post> {
    //TODO Specify only public feilds in find() call ..change schema
    post.senderIdentifier = this.userId();
    return Posts.insert(post);
});