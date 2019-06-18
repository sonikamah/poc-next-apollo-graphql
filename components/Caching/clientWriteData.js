import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import { withApollo } from 'react-apollo';

const GET_VISIBILITY_FILTER = gql`
  {
    visibilityFilter
  }
`;

const ClientWriteData = () => (
  <Query query={GET_VISIBILITY_FILTER}>

    {({ client }) => {
        client.query({ query: GET_VISIBILITY_FILTER})
      return (
      <button
        onClick={() => client.writeData({ data: { visibilityFilter: "SONIKA_HIDE" } })}
      > Client.writeData  - Edit the cached value "visibilityFilter"
      </button>)
    }}

  </Query>
);

export default withApollo(ClientWriteData);