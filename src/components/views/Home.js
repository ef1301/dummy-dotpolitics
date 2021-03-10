import React, {Component} from 'react';
import SearchBar from '../functionalComponents/SearchBar';
import RepByAddress from '../functionalComponents/repByAddress';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            address: '115 Bay 38th street'
        }
        console.log(this.state.address);
    }

    render() {
        console.log(this.state.address);
        return (
            <div>
                <SearchBar value={this.state.representative} filters={this.state.filters}/>
                <RepByAddress value={this.state.address}/>
            </div>
        );
    }
}