import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,

} from '@apollo/client';
import {onError} from '@apollo/client/link/error';

import './App.css';

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
  new HttpLink({url : "http://127.0.0.1:5000/graphql"})
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
      
    </ApolloProvider>
  );
}

export default App;
