import gql from "graphql-tag";
import { Query } from "react-apollo";
  
const MY_QUERY = gql`
  query WillFail {
    badField
  }
`;

const ShowingSomeErrors = () => (
    <Query query={MY_QUERY} errorPolicy="all">
      {({ error, data, loading }) => {
        if (loading) return <span>loading...</span>
        return (
          <div>
            <pre>Bad: {error.graphQLErrors.map(({ message }, i) => (
              <span key={i}>{message}</span>
            ))}
            </pre>
          </div>
        )
      }}
    </Query>
  );

  export default ShowingSomeErrors;
