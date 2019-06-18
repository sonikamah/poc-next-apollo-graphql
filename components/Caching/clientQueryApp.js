import gql from "graphql-tag";
import { Component } from 'react'
import { withApollo } from 'react-apollo';
import {
  List,
  ListItem,
  ListItemContainer,
  Num,
  A
} from '../ApolloPostList/styles';

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
    first: 10,
    skip: 0
}


class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      allPosts: null
    }
    this.clientQuery = this
      .clientQuery
      .bind(this);
  }

  async clientQuery() {
    var {data} = await this.props.client.query({ query: GET_POSTS, skip, variables}); // dafault fechPolicy: "cache-only"
    this.setState({allPosts: data.allPosts});
  }
  
  render() {
    return (
      <>
          <button onClick={this.clientQuery}>
            Client.query
          </button> data will be cached. By using dafault fechPolicy: "cache-only".
          <br/><br/>
          <List>
          {this.state.allPosts && this.state.allPosts.map((post, index) => (
            <ListItem key={post.id}>
              <ListItemContainer>
                <Num>{index + 1}. </Num>
                <A href={post.url}>{post.title}</A>
              </ListItemContainer>
            </ListItem>
          ))}
          </List>
      </>
    )
  }
}

export default withApollo(App);