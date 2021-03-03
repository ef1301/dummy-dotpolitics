import logo from './logo.svg';
import SearchResults from './components/containers/searchResults';
import Home from './components/views/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home/>
      <header className="App-header">
      <SearchResults/>
      </header>
    </div>
  );
}

export default App;
