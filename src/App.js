import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home, Search} from './components/views';
//import {QueryParams} from './components/functionalComponents/SearchBar';
import SearchBar from './components/functionalComponents/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import RepByAddress from './components/functionalComponents/repByAddress';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        navigator.geolocation.getCurrentPosition(console.log,console.log);
      });
  }

  render() {
    return (
      <div className="App">
        <Router>
        <SearchBar/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search/' component={Search}/>
            <Route exact path='/search/:query' children={(props) => <RepByAddress {...props}/>}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
