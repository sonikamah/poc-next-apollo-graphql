import Link from 'next/link';
import Header from '../components/Header';

const Index = () => (
    <div>
        <Header />
        <p>
            <li>How to use next/link ?
            Please{' '}
                <Link href="/contact">
                    <a>contact me</a>
                </Link>{' '}
            to get more information.
            </li>

            <li> How to use Axios - GET request? Please check {' '}
                <Link href="/AxiosGETList">
                    <a>Axios GET request</a>
                </Link>{' '}
            </li>

            <li> How to use Axios - POST request? Please check {' '}
                <Link href="/AxiosPOSTList">
                    <a>Axios POST request</a>
                </Link>{' '}
            </li>

            <li> How to use Axios - request/response Interceptors? Please check {' '}
                <Link href="/AxiosInterceptors">
                    <a>Axios Intercsptors request</a>
                </Link>{' '}
            </li>

            <li> Apollo Query {' '}
                <Link href="/apolloQuery">
                    <a>Next-Apollo-React - Query</a>
                </Link>{' '}
            </li>

            <li> Apollo Mutation {' '}
                <Link href="/apolloMutation">
                    <a>Next-Apollo-React - Mutation</a>
                </Link>{' '}
            </li>

            <li> Caching{' '}
                <Link href="/caching">
                    <a>Local State Management</a>
                </Link>{' '} readQuery, writeData, resetStore
            </li>

            <li> Error Handling {' '}
                <Link href="/errorHandling">
                    <a> Using Query graphQLErrors</a>
                </Link>{' '}
            </li>

            <li> Pagination {' '}
                <Link href="/pagination">
                    <a>Using Query fetchMore, updateQuery, fetchMoreResult</a>
                </Link>{' '}
            </li>
        </p>
    </div>
)

export default Index