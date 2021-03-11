import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom';
export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            filter: 'By Location',
            representative: true,
            filters: ['By Location', 'By Name'],
            search: false
        }
    }

    handleSwitch = (event) => {
        this.setState({
            representative: event.target.checked === true ? false: true
        });

        if(this.state.representative === true) {
            this.setState({
                filters: ['By Location', 'By Name']
            });
        } else {
            this.setState({
                filters: ['By Location']
            });
        }
    }

    handleQuery = (event) => {
        this.setState({query: event.target.value});
    }

    handleFilter = (event) => {
        this.setState({filter: event.target.value});
        console.log(this.state.filter);
    }

    handleSubmit = (event) => {
        const {query, filter, representative} = this.state;
        event.preventDefault();
        this.setState({
            search: true
        })
    }

    render() {
        const {query, filter, filters, representative, search} = this.state;
        if(search) {
            return (
                <Redirect to={{
                    pathname: '/search',
                    state: {
                        searchValue: query,
                        filter: filter,
                        representative: representative
                    }
                }} />
            );
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label className="switch">
                    <input type="checkbox" onChange={this.handleSwitch}></input>
                    </label>
                    <label htmlFor="search">Search:
                    <input type="text" value={query} id="search" name="search" onChange={this.handleQuery}></input>
                    </label>
                    <input list="filters" value={filter} onChange={this.handleFilter}></input>
                    <datalist id="filters">
                        {filters.map(item => {
                            return (<option value={item}></option>);
                        })}
                    </datalist>
                    <input type="submit" value="Search"></input>
                </form>
            );
        }
    }
}