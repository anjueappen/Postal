import * as React from "react";
import * as ReactDOM from "react-dom";
import {WelcomePage} from "../imports/ui/components/WelcomePage";
import {PostListContainer} from "../imports/ui/containers/PostListContainer";
import {AutoCompleteTextbox} from "../imports/ui/forms/subcomponents/AutoCompleteTextbox";
import {Accounts} from "meteor/accounts-base";
import {AddressFillComponent} from "../imports/ui/forms/AddressFillComponent";

interface PostPageProps {logoutHandler:any}
interface PostPageState {}

class PostPage extends React.Component<PostPageProps, PostPageState>{

    render(){
        return <div>
            <button type="button" onClick={this.props.logoutHandler}> Log Out </button>
            <br/>
            <PostListContainer/>
        </div>
    }
}

interface AppProps {}
interface AppState {userId: any, location: string, transitioning:boolean, loggedIn:boolean}

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
        this.hashRouter = this.hashRouter.bind(this);

    }

    componentDidMount() {
        window.addEventListener('hashchange', this.hashRouter, false);
    }

    componentWillUnmount() {
        window.removeEventListener('hashchange', this.hashRouter, false);
    }

    hashRouter(){
        this.setState({location: window.location.hash});
    }

    formCallback(err){
        (err) ? console.log(err) :  console.log('Success', Meteor.userId());
        this.setState({loggedIn: Meteor.userId() != null});
        window.location.hash = this.state.loggedIn? 'posts': '/';
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
                {/*<h1>Header goes here</h1>*/}
                {this.route(this.state.location)}
                {/*<h1>Footer</h1>*/}
            </div>
        );
    }

    route(path: string) {
        switch (path) {
            case '#/':
                return <WelcomePage handleRegistration={this.handleRegistration}
                                 handleLogin={this.handleLogin}/> ;
            case '#posts':
                return <PostPage logoutHandler={this.handleLogout} />;
            case '#auto':
                return <AutoCompleteTextbox isScriptLoaded={false} isScriptLoadSucceed={false}/>;
            case '#map':
                return <AddressFillComponent/>;
            case '#trips':
                return <div>Trips page </div>;
            case '#pickup':
                return <div>Pickup page </div>;
            // case '#sem':
            //     return <LoginForm />;
            default:
                return <PostPage logoutHandler={this.handleLogout}/>;
        }
    }
}

Meteor.startup(() => {
//     navigated(window.location.hash)
    ReactDOM.render(<Main/>, document.getElementById('root'));
});

