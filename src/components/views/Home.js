import React, {Component} from 'react';
import SearchBar from '../functionalComponents/SearchBar';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }



    render() {
        return (
            <div>
                <SearchBar value={this.state.representative} filters={this.state.filters}/>
            </div>
        );
    }
}