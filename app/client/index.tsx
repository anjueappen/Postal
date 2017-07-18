import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { WelcomePage } from '../imports/ui/components/WelcomePage';
import { createContainer } from 'meteor/react-meteor-data';
import {PostListContainer} from '../imports/ui/containers/PostListContainer';
import {NotFound} from  '../imports/ui/err/NotFound';
import {AutoCompleteTextbox} from "../imports/ui/forms/subcomponents/AutoCompleteTextbox";

import * as _ from 'underscore';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// then wraps it into `withScriptjs` HOC
// It loads Google Maps JavaScript API v3 for you asynchronously.
// Name the component AsyncGettingStartedExampleGoogleMap
const AsyncGettingStartedExampleGoogleMap = withScriptjs(
    withGoogleMap(
        props => (
            <GoogleMap
                ref={props.onMapLoad}
                defaultZoom={3}
                defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
                onClick={props.onMapClick}
            >
                {props.markers.map(marker => (
                    <Marker
                        {...marker}
                        onRightClick={() => props.onMarkerRightClick(marker)}
                    />
                ))}
            </GoogleMap>
        )
    )
);// Then, render it:
class Map extends React.Component<{}, {}> {

    render(){
        return <AsyncGettingStartedExampleGoogleMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTLq1MW1uKRqxDLPHiYYHVvCCr67EnS0s"
            loadingElement={
      <div style={{ height: `100%`, width:`100%` }}>
        <div>Loading ...</div>
      </div>
    }
            containerElement={
      <div style={{ height: `100%` }} />
    }
            mapElement={
      <div style={{ height: `100%` }} />
    }
            onMapLoad={_.noop}
            onMapClick={_.noop}
            markers={[]}
            onMarkerRightClick={_.noop}
        />
    }
}

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
        // window.addEventListener('hashchange', navigated, false);
        return (
            <div style={{ height: `500px`, width:`100%`}}>
                {/*<h1>Header goes here</h1>*/}
                {this.route(this.state.location)}
                {/*<h1>Footer</h1>*/}
            </div>
        );
    }

    route(path: string) {
        // window.addEventListener('hashchange', navigated, false);
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
// Handle the initial route
//     navigated(window.location.hash)
    ReactDOM.render(<Main/>, document.getElementById('root'));
// Handle browser navigation events
});

