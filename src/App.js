import UserList from 'components/UserList';
import { USERS } from './constant';
import './App.css';

function App() {
  return (
    <section className="App">
      <UserList users={USERS}/>
    </section>
  );
}

export default App;
