//Taken from https://medium.com/@juergen.schlieber/create-and-secure-your-meteor-collections-with-typescript-14619dca746e

import {Mongo} from 'meteor/mongo';
import lockCollection from './lockCollection';

export default function createCollection<DocInterface>(name: string): Mongo.Collection<DocInterface> {
  let collection: Mongo.Collection<DocInterface> = new Mongo.Collection<DocInterface>(name);
  return lockCollection<DocInterface>(collection);
}

