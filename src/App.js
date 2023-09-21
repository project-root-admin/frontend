import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import logo from './logo.svg';
import AddTaskForm from './components/AddTaskForm';
import UserInfo from './components/UserInfo';
function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql', 
    cache: new InMemoryCache()
  })
  
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
  <AddTaskForm />
      </header>

      <UserInfo />  
    </div>
    </ApolloProvider>
  );
}

export default App;
