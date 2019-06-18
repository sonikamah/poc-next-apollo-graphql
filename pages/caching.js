import { ApolloProvider } from "react-apollo";
import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from '../components/Caching/clientQueryApp';
import ClientWriteData from '../components/Caching/ClientWriteData';
import ResetStore from '../components/Caching/onResetStore';
import Header from '../components/Header';


const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn', // Server URL (must be absolute)
    opts: {
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    }
  })

const client = new ApolloClient({
  cache,
  link
});

const data = {
    todos: [],
    visibilityFilter: 'SHOW_ALL',
    networkStatus: {
        __typename: 'NetworkStatus',
        isConnected: false,
    },
};

cache.writeData({ data });

const Caching = () => (
    <ApolloProvider client={client}>
        <Header/>
        1. <App />
        2. <ClientWriteData/> <br/><br/>
        3. <ResetStore/>
    </ApolloProvider>
)
export default Caching;