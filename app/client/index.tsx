import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { WelcomePage } from '../imports/ui/components/WelcomePage';
import { createContainer } from 'meteor/react-meteor-data';
import {PostListContainer} from '../imports/ui/containers/PostListContainer';
import {NotFound} from  '../imports/ui/err/NotFound';



interface HomepageProps {logoutHandler:any}
interface HomepageState {page:string}


class HomePage extends React.Component<HomepageProps, HomepageState>{

    constructor(props:any){
        super(props);
        this.state = {
            page: '#/posts'
        }
    }

    render(){
        return <div>
            <button type="button" onClick={this.props.logoutHandler}> Log Out </button>
            <br/>
            {this.route(this.state.page)}
        </div>
    }

    route(path:string){
        switch (path){
            case '#/posts':

                return <PostListContainer/>
            default:
                console.log("defaulting");
                return <PostListContainer/>


        }
    }
}

interface AppProps {};
interface AppState {userId: any, location: string, transitioning:boolean, loggedIn:boolean}

/*
 Custom setState function that triggers re-render
 */

export default class Main extends React.Component<AppProps, AppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            userId: null,
            location: window.location.hash,
            transitioning: false,
            loggedIn: Meteor.userId() != null
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegistration = this.handleRegistration.bind(this);
        this.handleLogout = this.handleLogout.bind(this);


        this.formCallback = this.formCallback.bind(this);
    }

    formCallback(err){
        (err) ? console.log(err) :  console.log('Success', Meteor.userId());
        this.setState({loggedIn: Meteor.userId() != null});
    }

    handleRegistration(values:any):void {
        const {name, email, phone, password} = values;
        Accounts.createUser(

            {username: name,
                email: email,
                password: password},

            this.formCallback);
    }


    handleLogin(values:any): void{
        const {email, password} = values;
        Meteor.loginWithPassword(email, password, this.formCallback);
    }

    handleLogout():void{
        Meteor.logout(this.formCallback);
    }

    render() {
        return (
            <div>
                <h1>Header goes here</h1>
                {this.route(this.state.location)}
                <h1>Footer</h1>
            </div>
        );
    }


    route(path: string) {
        switch (path) {
            case '#/':
                return this.state.loggedIn? <HomePage logoutHandler={this.handleLogout}/> :
                    <WelcomePage handleRegistration={this.handleRegistration} handleLogin={this.handleLogin}/> ;
            // case '#/posts':
            //     return <HomePage logoutHandler={this.handleLogout}/>;
            default:
                return <HomePage logoutHandler={this.handleLogout}/>;
        }
    }

}

// function navigated(){
//     setState({location: window.location.hash});
//     ReactDOM.render(route(path), document.getElementById('root'));
// }

Meteor.startup(() => {
// Handle the initial route
//     navigated(window.location.hash)
    ReactDOM.render(<Main/>, document.getElementById('root'));
// Handle browser navigation events
});

// Meteor.startup(() => {
//     renderApp(window.location.pathname); //render page the first time
//     window.addEventListener('popstate', function (e) {
//         //render page when path changes
//         renderApp(window.location.pathname);
//     });
// });
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
