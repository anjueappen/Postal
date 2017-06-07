// import * as Meteor from 'meteor';
import * as React from 'react';
import {Component, Props} from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from '../components/Hello';
import { WelcomePage } from '../components/WelcomePage';
// import { Meteor } from 'meteor/meteor';
// import * as Meteor from 'meteor';


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
    Meteor.logout(function(err){
      (err) ? console.log(err) :  console.log('Success logging out');
    })
  }
  render(){
    return <div>

    You are logged in!
    <br/>
    <button type="button" onClick={this.logOut}> Log Out </button>

     </div>
  }
}

class PostItems extends React.Component<{}, {}>{
  constructor(props:any){
    super(props);
  }

  addPost(){

  }

  render(){
    return <div>
    <button type="button" onClick={this.logOut}> Log Out </button>

    </div>
  }

}


interface RouterProps { user:string, path:string };

function router(props: RouterProps){
  //TODO insert path parsing functions here

  if(Meteor.userId() == null){
    //TODO move login logic to outside router
    return <WelcomePage  />;

  } else {
    switch (props.path) {
      case "/":
        return <LoggedIn />;

      case "":
        return
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
        <Main user={user} path={path}/>,
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
//         case 'admin':
//             return <Admin user={props.user}/>;
//         default:
//             return <NotFound path={props.path}/>;
//     }
// }
