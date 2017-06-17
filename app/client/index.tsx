import * as React from 'react';
import {Posts, DeliveryStatus} from '../imports/api/posts/post';
import * as ReactDOM from 'react-dom';
import { WelcomePage } from '../imports/ui/components/WelcomePage';
import { PostItem } from '../imports/ui/components/PostItem';
import { createContainer } from 'meteor/react-meteor-data';


interface UserProps {userID: string; query:string};

class User extends React.Component<UserProps, {}>{
    render(){
        return (
            <div>
                <h1> I am user {this.props.userID} with query {this.props.query}</h1>
            </div>
        )
    }
}

class NotFound extends React.Component<{}, {}>{
    render(){
        return <div>Page Not Found</div>
    }
}

class LoggedIn extends React.Component<{}, {}>{

    constructor(props:any){
        super(props);
        this.logOut = this.logOut.bind(this);
    }

    logOut():void{
        let oldID = Meteor.userId();
        Meteor.logout(function(err){
            (err) ? console.log(err) :  console.log('Success logging out');
        });
        window.location.assign("/")
    }
    render(){
        return <div>

            You are logged in!
            <br/>
            <button type="button" onClick={this.logOut}> Log Out </button>

            <br/>
            <PostItemsContainer/>
        </div>
    }
}

interface PostItemsProps {
    loading:boolean,
    postExists:boolean,
    posts:object[],
}

class PostItemsList extends React.Component<PostItemsProps>{
    constructor(props:any){
        super(props);
        this.addPost = this.addPost.bind(this)

    }

    addPost(){
        console.log("Adding post");
    }

    render(){
      Meteor.subscribe('posts.all', function() {
        console.log(Posts.find().count());
      });
        // console.log(Meteor.subscribe('myPosts'));
        // var posts = Posts.find({senderIdentifier: Meteor.userId()});
        var posts = Posts.find().fetch();
        console.log(posts);
        // var p = posts.map((post) => {return <li><PostItem name={post.name} deliveryStatus={post.deliveryStatus} /></li>});
        // var p = posts.map((post) => {return <li>{post}</li>});
        return <div>
            <button type="button" onClick={this.addPost}> Add post item </button>
            <ul></ul>
        </div>
    }
}

PostItemsContainer = createContainer(() => {
    const postsHandle = Meteor.subscribe('posts.all');
    const loading = !postsHandle.ready();
    const posts = Posts.find();
    const postExists = !loading && !!posts;
    return {
        loading:loading,
        postExists: postExists,
        posts: postExists ? posts.fetch() : [],
    };
}, PostItemsList);


function parsePath(path: string):object{
    var parser = document.createElement('a');
    parser.href = path;

    var param_string = parser.search;
    var key = param_string.substring(param_string.indexOf('?') + 1,
        param_string.indexOf("="));
    var value = param_string.substring(param_string.indexOf("=") + 1,
        param_string.length)
    return {key:value}
}

interface RouterProps { user:string, path:string };

function router(props: RouterProps){
    //TODO insert path parsing functions here

    console.log("Going to ", props.path);
    console.log(props.user);

    if(props.user == null ){
        if( !Meteor.loggingIn()){
            return <WelcomePage  />;
        }
        //TODO move login logic to outside router

    } else {
        switch (props.path) {
            case "/":
                return <LoggedIn />;
            default:
                //TODO change to a NotFound component
                return <NotFound />;
        }
    }

}

export default function Main(props: RouterProps) {
    return (
        <div>
            <h1>Header</h1>
            {router(props)}
            <h1>Footer</h1>
        </div>
    );
}

function renderApp(path: string) {
    //TODO Fix user
    let user = "A user"
    ReactDOM.render(
        <Main user={Meteor.userId()} path={path}/>,
        document.getElementById('root')
    );
}

Meteor.startup(() => {
    renderApp(window.location.pathname); //render page the first time
    window.addEventListener('popstate', function (e) {
        //render page when path changes
        renderApp(window.location.pathname);
    });
});
// import {Router, Route, browserHistory} from 'react-router';

// interface UserProps extends Props<{}> {userID: string; query:string}

// class User extends Component<UserProps,{}> {
//   render() {
//     // let { userID } = this.props.params
//     // let { query } = this.props.location
//     let  userID  = this.props.userID;
//     let  query  = this.props.query;
//     let age = query && query["showAge"] ? '33' : ''
//
//     return (
//       <div className="User">
//         <h1>User id: {userID}</h1>
//         {age}
//       </div>
//     )
//   }
// }

// const HelloMessage = (props) => <div>Hello {props.params.name}</div>;
//
// class App extends Component<Props<{}>,{}> {
//   render() {
//     return (
//       <div>
//         <ul>
//           <Route path="/" component={Hello} />
//         </ul>
//         {this.props.children}
//       </div>
//     )
//   }
// }

// Meteor.startup(() => {
// render((
//   <Router history={browserHistory}>
//     <Route path="/" component={Hello}/>
//   </Router>
// ), document.getElementById('root'))});

// type Props = { user:User, path:string };
//
// export default function Main(props: Props) {
//     return (
//         <div>
//             <h1>Header</h1>
//             {router(props)}
//             <h1>Footer</h1>
//         </div>
//     );
// }
//
// function router(props: Props) {
//     var {key, param} = parsePath(props.path);
//     switch (key) {
//         case '':
//             return <JobMain/>;
//         case 'jobMain':
//             return <JobMain/>;
//         case 'empMain':
//             return <Employee type="perm" empId={param}/>;
//         case 'tempMain':
//             return <Employee type="temp" empId={param}/>;
// no need for empId..
//         case 'admin':
//             return <Admin user={props.user}/>;
//         default:
//             return <NotFound path={props.path}/>;
//     }
// }
