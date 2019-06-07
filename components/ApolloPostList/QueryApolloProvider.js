import React, { Component } from "react";
import { render } from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: `https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn`
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

class QueryApolloProvider extends Component {
  state = { showOtherQuery: false };

  renderQuery = () => {
    return (
      <Query query={GET_VOTES}
        variables= {{
            first: 10,
            skip: 0
        }}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return "Error in renderQuery";

          return (
            <ul>
              {data.allPosts.map(data => <li key={data.id}>{data.title}</li>)}
            </ul>
          );
        }}
      </Query>
    );
  };

  renderOtherQuery() {
    return (
      <Query query={GET_VOTES}
      variables= {{
          first: 10,
          skip: 0
      }}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return "Error in renderOtherQuery";

          return (
            <ul>
              {data.allPosts.map(data => <li key={data.id}>{data.title}</li>)}
            </ul>
          );
        }}
      </Query>
    );
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h2>Query test</h2>
          {this.renderQuery()}

          <div>
            <h2>Client query test</h2>
            <button onClick={() => this.setState({ showOtherQuery: true })}>
              Test!
            </button>
            {this.state.showOtherQuery && this.renderOtherQuery()}

            <h2>Store reset</h2>
            <button
              onClick={() => {
                client.resetStore();
              }}
            >
              {" "}
              Reset!
            </button>
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default QueryApolloProvider;
