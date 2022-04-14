import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
  useQuery,

} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import './App.css';
import AllBooks from './components/AllBooks';

const errorLink = onError(({
  graphQLErrors,
  networkError,
})=>{
  if(graphQLErrors){
    graphQLErrors.map((_m,_l,_p)=>{
      console.log("graphql error" , _l,_m,_p);
    })
  }

})

const link = from([
  errorLink,
  new HttpLink({uri : "http://localhost:5000/graphql"})
])

const client = new ApolloClient({
  cache : new InMemoryCache(),
  link,
})


function App() {

  return (
    <ApolloProvider
      client={client}
    >
      <AllBooks />
    </ApolloProvider>
  );
}

export default App;
