import React, {Component} from 'react';
import SearchBar from '../functionalComponents/SearchBar';
import RepByAddress from '../functionalComponents/repByAddress';
import {Redirect, withRouter} from 'react-router-dom';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            address: '11214',
        }
        console.log(this.state.address);
    }

    render() {
        const {search} = this.state;
        return (
            <div>
                <SearchBar/>
                <RepByAddress value={this.state.address}/>
            </div>
        );
    }
}