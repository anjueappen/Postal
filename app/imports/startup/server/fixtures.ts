import {Posts, DeliveryStatus} from '../../api/posts/post';
import * as _ from 'underscore';

if (Posts.find().count() === 0) {
  var categories = [
  {
    name: 'Christmas Card',
    senderIdentifier: 'APSw6hL6eAEZ36CDY',
    deliveryStatus: DeliveryStatus.Pending
  },
  {
    name: 'Letter to my mother',
    senderIdentifier: 'APSw6hL6eAEZ36CDY',
    deliveryStatus: DeliveryStatus.InTransit
  },{
      name: 'Dummy Package',
      senderIdentifier: 'APSw6hL6eAEZ36CDASDFASDF',
      deliveryStatus: DeliveryStatus.InTransit
    }
];

_.each(categories, function (category) { Posts.insert(category);});
console.log("Done loading post fixtures");
}

if ( Meteor.users.find().count() === 0 ) {
    Accounts.createUser({
        username: 'admin',
        email: 'admin',
        password: '1',
        profile: {
            first_name: 'fname',
            last_name: 'lname',
            company: 'company',
        }
    });
    console.log("Added default user admin")
}


