import withData from '../components/ApolloPostList/apollo'
// import PostList from '../components/ApolloPostList/PostList';
import Header from '../components/Header';
import Pagination from '../components/pagination/App';

export default withData(props => (
    <>
        <Header />
        <Pagination />
    </>
));