import React, {Component} from 'react';
//import SearchBar from '../functionalComponents/SearchBar';
//import axios from 'axios';
import RepByAddress from '../functionalComponents/repByAddress';
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        }
    }

    searchResults = () => {
        const {filter, query} = this.state;
        if(filter === 'Representatives') {
            return (<RepByAddress />);
        } else {
            return (<div></div>);
        }
    }

    render() {
        console.log(this.props);
        const {filter, query} = this.state;
        return (
            <>
                <RepByAddress />
            </>
        );
    }
}