import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { WelcomePage } from '../imports/ui/components/WelcomePage';
import {PostListContainer} from '../imports/ui/containers/PostListContainer';
import {NotFound} from  '../imports/ui/err/NotFound';
import {AutoCompleteTextbox} from "../imports/ui/forms/subcomponents/AutoCompleteTextbox";
import {Map} from '../imports/ui/views/Map.tsx';

interface HomepageProps {logoutHandler:any}
interface HomepageState {page:string}

//TODO: refactor on MAC: PostsPage
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
                return <PostListContainer/>;
            case '#/trips':
                return <div>Trips page </div>;
            case '#/pickup':
                return <div>Pickup page </div>;

                console.log("defaulting");
                return <NotFound/>;


        }
    }
}

interface AppProps {}
interface AppState {userId: any, location: string, transitioning:boolean, loggedIn:boolean}

export default class Main extends React.Component<AppProps, AppState> {

    constructor(props: any) {
        super(props);
        // window.addEventListener('hashchange', this.route, false);
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

    gotToPage(path:string){
        this.setState({location: path});
    }

    handleRegistration(values:any):void {
        const {name, email, phone, password} = values;
        Accounts.createUser(

            {username: name,
                email: email,
                password: password},

            this.formCallback);
    }

    handleLogin(values:any): void {
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
                return this.state.loggedIn? this.route('#/posts'):
                    <WelcomePage handleRegistration={this.handleRegistration}
                                 handleLogin={this.handleLogin}/> ;
            case '#/posts':
                return <HomePage logoutHandler={this.handleLogout}/>;
            case '#/auto':
                return <AutoCompleteTextbox/>;
            case '#/map':
                return <Map/>
            default:
                return <HomePage logoutHandler={this.handleLogout}/>;
        }
    }
}

Meteor.startup(() => {
//     navigated(window.location.hash)
    ReactDOM.render(<Main/>, document.getElementById('root'));
});

