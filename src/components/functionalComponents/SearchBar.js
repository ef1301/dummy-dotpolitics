import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom';
export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            filter: '',
            representative: null,
            filters: ['By Location', 'By Name'],
            search: false
        }
        this.handleSwitch = this.handleSwitch.bind(this);
        this.handleQuery = this.handleQuery.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSwitch(event) {
        this.setState({
            representative: event.target.checked
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

    handleQuery(event) {
        this.setState({query: event.target.value});
    }

    handleFilter = (event) => {
        this.setState({filter: event.target.value});
        console.log(this.state.filter);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            search: true
        })
        if(this.state.representative) {
            this.props.history.push(`/search/representatives/${this.state.query}`)
        } else {
            this.props.history.push(`/search/polls/${this.state.query}`)
        }
    }

    render() {
        const {query, filter, filters, search} = this.state;
        if(search) {
            <Redirect to='/results' />
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label className="switch">
                    <input type="checkbox" onChange={this.handleSwitch}></input>
                    </label>
                    <label htmlFor="search">Search:
                    <input type="text" id="search" name="search" onChange={this.handleQuery}></input>
                    </label>
                    <input list="filters" onChange={this.handleFilter}></input>
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