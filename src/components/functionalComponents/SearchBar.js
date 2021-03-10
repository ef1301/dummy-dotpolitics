import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
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
        this.handleChange = this.handleChange.bind(this);
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

    handleChange(event) {
        this.setState({query: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            search: true
        })
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
                    <input type="text" id="search" name="search" onChange={this.handleChange}></input>
                    </label>
                    <input list="filters"></input>
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