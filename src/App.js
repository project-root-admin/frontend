import { ApolloProvider } from '@apollo/client';
import client from '@utils/api';
import HomePage from './pages/HomePage';
// import AddTaskForm from './components/AddTaskForm';
// import UserInfo from './components/UserInfo';

function App() {
  
  
  return (
    <ApolloProvider client={client}>
          <HomePage />
    </ApolloProvider>
  );
}

export default App;
