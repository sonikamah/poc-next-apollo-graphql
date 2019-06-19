import { ApolloProvider } from "react-apollo";
import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from '../components/Caching/clientQueryApp';
import ClientWriteData from '../components/Caching/ClientWriteData';
import ResetStore from '../components/Caching/onResetStore';
import ResolverUpdatePost from '../components/Caching/ResolverUpdatePost';
import Header from '../components/Header';
import gql from 'graphql-tag'


const cache = new InMemoryCache();

const link = new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn', // Server URL (must be absolute)
    opts: {
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    }
});

const GET_VOTES = gql`
    query allPosts($first: Int!, $skip: Int!) {
      allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
        id
        title
        votes
        url
        createdAt
      }
      _allPostsMeta {
        count
      }
    }
  `

const resolvers = {
    Mutation: {
      updatePost: (_root, variables, { cache }) => {
        const {allPosts} = cache.readQuery({ query: GET_VOTES, variables: {first: 10, skip: 0} });
        const myNewVotes = {
            id: 'added-new-id',
            title: 'Start using Apollo Client.',
            votes: 1234,
            __typename: "Post"
        };

        cache.writeData({
            query:  GET_VOTES, variables: {first: 10, skip: 0},
            data: {
                newUpdatedallPosts: [...allPosts, myNewVotes]
            }
        });
        return null;
      },
    }
}

const client = new ApolloClient({
  cache,
  resolvers,
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
        3. <ResetStore/> <br/><br/>
        4. <ResolverUpdatePost/>
    </ApolloProvider>
)
export default Caching;