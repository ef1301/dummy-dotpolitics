import React, {Component} from 'react';
import SearchBar from '../functionalComponents/SearchBar';
import RepByAddress from '../functionalComponents/repByAddress';
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
        }
    }

    searchResults = () => {
        const {filter, searchValue, representative} = this.props.location.state;
        console.log(filter, searchValue, representative);
        if(representative) {
            if(filter === 'By Location') {
                return (<RepByAddress value={searchValue} />);
            } else {
                return (<div></div>);
            }
        } else {
            return (<div></div>);
        }
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <SearchBar />
                {this.searchResults()}
            </div>
        );
    }
}