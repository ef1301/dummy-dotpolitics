import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home, Search} from './components/views';
import './App.css';

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
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/' exact component={() => <Home/>} />
            <Route path='/search' exact component={() => <Search/>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
