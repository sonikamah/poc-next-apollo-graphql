import withData from '../components/ApolloPostList/apollo'
// import PostList from '../components/ApolloPostList/PostList';
import Header from '../components/Header';
import PostListQuery from '../components/ApolloPostList/PostListQuery';

export default withData(props => (
    <>
        <Header />
        <PostListQuery />
    </>
));