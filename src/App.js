import './App.css';
import AddTask from './Compopent/AddTask';
import FilterTask from './Compopent/FilterTask';
import ListTask from './Compopent/ListTask';

function App() {
  return (
    <div className="m-4">
      <AddTask/>
      <ListTask/>
      <FilterTask/>
    </div>
  );
}

export default App;
