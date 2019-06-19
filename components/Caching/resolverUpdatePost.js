import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import {
    ListItem,
    ListItemContainer,
    Num,
    A
  } from '../ApolloPostList/styles'

const UPVOTE_POST = gql`
  mutation updatePost($id: ID!, $votes: Int) {
    updatePost(id: $id, votes: $votes) @client {
      id
      __typename
      votes @client
    }
  }
`

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

const ResolverUpdatePost = () => {
    return (
      <>a] Mutation Component -
        <Mutation mutation={UPVOTE_POST} >
          {( updatePost, {loading, error}) => {
              {loading && <p>Loading...</p>}
              {error && <p>Error :( Please try again</p>}
              return (
                  <>
                      <button onClick={() => updatePost()}> Add New Entry(id, votes) to apollo cache</button><br/>
                       - see the APOLLO Cache
                  </>
              )}
          }   
        </Mutation>

        <br/>b] Query Component -
        <Query query={GET_VOTES} variables={ {first: 10, skip: 0} }>
          {({ data: {allPosts}, loading }) => {
              if (loading) return "Loading...";
              return (
                  allPosts.map((post, index) => (
                      <ListItem key={post.id}>
                      <ListItemContainer>
                        <Num>{index + 1}. </Num>
                        <A href={post.url}>{post.id} - {post.votes}</A>
                      </ListItemContainer>
                      </ListItem>
                  ))
              )
          }}
        </Query>
      </>
    );
};

export default ResolverUpdatePost;