import gql from "graphql-tag";
import { Query } from "react-apollo";
import PostUpvoter from './PostUpvoter'
import ErrorMessage from './ErrorMessage'
import {
  Container,
  List,
  ListItem,
  ListItemContainer,
  Num,
  A,
  Button
} from './styles'

const POSTS_PER_PAGE = 10
  
const GET_POSTS = gql`
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
const skip = 0;
const variables = {
    first: POSTS_PER_PAGE,
    skip: 0
}

const PostListQuery = () => (
    <Query 
        query={GET_POSTS}
        skip={skip}
        variables={ variables }>
      {({ data: {allPosts, _allPostsMeta}, loading, error, fetchMore }) => {
        if (loading) return "Loading...";
        if (error) return <ErrorMessage message="Error loading posts." />
        if (allPosts && allPosts.length) {
            const areMorePosts = allPosts.length < _allPostsMeta.count
            return (
              <Container>
                <List>
                  {allPosts.map((post, index) => (
                    <ListItem key={post.id}>
                      <ListItemContainer>
                        <Num>{index + 1}. </Num>
                        <A href={post.url}>{post.title}</A>
                        <PostUpvoter id={post.id} votes={post.votes} />
                      </ListItemContainer>
                    </ListItem>
                  ))}
                </List>
                {areMorePosts ? (
                  <Button onClick={() => fetchMore({
                    variables: {
                        skip: allPosts.length
                      },
                      updateQuery: (previousResult, { fetchMoreResult }) => {
                        if (!fetchMoreResult) {
                          return previousResult
                        }
                        return Object.assign({}, previousResult, {
                          // Append the new posts results to the old one
                          allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
                        })
                      }
                  })}>
                    {loading ? 'Loading...' : 'Show More'}
                  </Button>
                ) : (
                  ''
                )}
              </Container>
            )
          }
  
          return <div>Loading... sonika</div>
      }}
    </Query>
  );

  export default PostListQuery;
