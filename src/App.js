import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home, Search} from './components/views';
import SearchBar from './components/functionalComponents/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import RepByAddress from './components/functionalComponents/repByAddress';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <Router>
        <SearchBar/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search/' component={Search}/>
            <Route exact path='/search/Representatives/:query' children={(props) => <RepByAddress {...props}/>}/>
            <Route exact path='/search/Polls/:query' children={(props) => <RepByAddress {...props}/>}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
