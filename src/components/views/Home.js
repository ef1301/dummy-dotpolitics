import React, {Component} from 'react';
import SearchBar from '../functionalComponents/SearchBar';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            filters: ['By Name', 'By Location']
        }
    }

    render() {
        return (
            <div>
                <SearchBar filters={this.state.filters}/>
            </div>
        );
    }
}