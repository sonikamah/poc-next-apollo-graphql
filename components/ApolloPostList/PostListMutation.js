import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import {
    ListItem,
    ListItemContainer,
    Num,
    A
  } from './styles'

const UPVOTE_POST = gql`
  mutation updatePost($id: ID!, $votes: Int) {
    updatePost(id: $id, votes: $votes) {
      id
      __typename
      votes
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
const PostListMutation = ({id, votes}) => {
    return (
        <>
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

            <Mutation mutation={UPVOTE_POST} key={id}>
                {( updatePost, {loading, error}) => {
                    {loading && <p>Loading...</p>}
                    {error && <p>Error :( Please try again</p>}
                    return (
                        <>  Change the votes of ID - {id}<br/>
                            Updated Votes are <button onClick={() => updatePost({variables: {id, votes}})}> {votes} value using Above ID</button>
                        </>
                    )}
                }   
            </Mutation>
        </>
    );
};

export default PostListMutation;