import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home, Search} from './components/views';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={() => <Home/>} />
          <Route path='/results' exact component={() => <Search/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
