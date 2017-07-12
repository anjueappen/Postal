import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { WelcomePage } from '../imports/ui/components/WelcomePage';
import { createContainer } from 'meteor/react-meteor-data';
import {PostListContainer} from '../imports/ui/containers/PostListContainer';
import {NotFound} from  '../imports/ui/err/NotFound';
import Autocomplete from 'react-google-autocomplete';

// import  Script from 'react-load-script';
// var Script = require('react-load-script').defualt;
import scriptLoader from 'react-async-script-loader';


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

                return <PostListContainer/>;
            default:
                console.log("defaulting");
                return <PostListContainer/>


        }
    }
}

interface AppProps {}
interface AppState {userId: any, location: string, transitioning:boolean, loggedIn:boolean}


interface AutoCompleteProps {isScriptLoaded:boolean, isScriptLoadSucceed:boolean}
interface AutoCompleteState {ready:boolean}

@scriptLoader('https://maps.googleapis.com/maps/api/js?key=AIzaSyBTLq1MW1uKRqxDLPHiYYHVvCCr67EnS0s&libraries=places')
export class AutoComplete extends React.Component<AutoCompleteProps, AutoCompleteState>{

    constructor(props:any) {
        super(props);
        this.state = {ready: false};
    }

    componentWillReceiveProps (AutoCompleteProps) {
        const {isScriptLoaded, isScriptLoadSucceed} = AutoCompleteProps;
        if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
            if (isScriptLoadSucceed) {
                this.setState({ready:true});
            }
            else console.log('Autocomplete error');
        }
    }

    componentDidMount () {
        const { isScriptLoaded, isScriptLoadSucceed } = this.props
        if (isScriptLoaded && isScriptLoadSucceed) {
            this.setState({ready:true});
        }
    }


    render() {
        const output = ! (this.state.ready)? <div>Loading...</div> :
            <div>Loaded!</div>;

        return (<div>
                {output}
            </div>
        );
    }

    handleScriptCreate() {
        console.log('Script created');
        this.setState({ scriptLoaded: false })
    }

    handleScriptError() {
        console.log('Script error');
        this.setState({ scriptError: true })
    }

    handleScriptLoad() {
        console.log('Script loaded');
        this.setState({ scriptLoaded: true })
    }
}

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
            case '#/auto':
                return <AutoComplete/>
            default:
                return <HomePage logoutHandler={this.handleLogout}/>;
        }
    }

}

Meteor.startup(() => {
// Handle the initial route
//     navigated(window.location.hash)
    ReactDOM.render(<Main/>, document.getElementById('root'));
// Handle browser navigation events
});

