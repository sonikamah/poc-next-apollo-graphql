import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';

import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory';

const cache = new InMemoryCache({
  dataIdFromObject: object => {
    switch (object.__typename) {
      case 'foo': return object.key; // use `key` as the primary key
      case 'bar': return `bar:${object.blah}`; // use `bar` prefix and `blah` as the primary key
      default: return defaultDataIdFromObject(object); // fall back to default handling
    }
  }
});

const client = new ApolloClient({
  link: new HttpLink(),
  cache
});