//Taken from https://medium.com/@juergen.schlieber/create-and-secure-your-meteor-collections-with-typescript-14619dca746e

import {Mongo} from 'meteor/mongo';

const DENY_RULES: Mongo.AllowDenyOptions = {
  insert: () => true,
  update: () => true,
  remove: () => true,
};

export default function lockCollection<DocInterface>(collection: Mongo.Collection<DocInterface>): Mongo.Collection<DocInterface> {
  collection.deny(DENY_RULES);
  return collection;
}
