import withData from '../components/ApolloPostList/apollo'
// import PostList from '../components/ApolloPostList/PostList';
import Header from '../components/Header';
import ShowingSomeErrors from '../components/Errorhandling/App';

export default withData(props => (
    <>
        <Header />
        <ShowingSomeErrors />
    </>
));