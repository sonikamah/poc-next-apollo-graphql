import withData from '../components/ApolloPostList/apollo'
import Header from '../components/Header';
import PostListMutation from '../components/ApolloPostList/PostListMutation';

const id = "cjx2p2kbb05vx0166nurov7eh"
const votes = 1111;

export default withData(props => (
    <>
        <Header />
        <PostListMutation id={id} votes={votes}/>
    </>
));