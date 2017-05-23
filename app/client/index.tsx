// import * as Meteor from 'meteor';
import * as React from 'react';
import {Component, Props} from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from '../components/Hello';

interface UserProps extends Props<{}> {userID: string; query:string}

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

Meteor.startup(() => ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("root")
));
