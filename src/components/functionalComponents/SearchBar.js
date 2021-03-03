import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({query: event.target.value});
        console.log(this.state.query);
    }

    render() {
        return (
            <form>
                <label for="search">Search:</label>
                <input type="text" id="search" name="search" onChange={this.handleChange}></input>
                <input list="filters"></input>
                <datalist id="filters">
                    {this.props.filters.map(item => {
                        console.log(item);
                        return (<option value={item}></option>);
                    })}
                </datalist>
                <input type="submit" value="Search"></input>
            </form>
        );
    }
}