import './App.css';
import SearchTodos from './TodoList';
import SearchUsers from './UsersList';

function App() {
  return (
    <div className="App">
      <h2>Higher Order Componenet</h2>
      <div className='section'>
        <div>
        <SearchUsers></SearchUsers>

        </div>
        <div>
          <SearchTodos></SearchTodos>
        </div>

      </div>
    </div>
  );
}

export default App;
