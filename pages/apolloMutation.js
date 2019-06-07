import withData from '../components/ApolloPostList/apollo'
import Header from '../components/Header';
import PostListMutation from '../components/ApolloPostList/PostListMutation';

const id = "cjwj7mg2a0nbj0155z0qlkxek"
const votes = 1111;

export default withData(props => (
    <>
        <Header />
        <PostListMutation id={id} votes={votes}/>
    </>
));