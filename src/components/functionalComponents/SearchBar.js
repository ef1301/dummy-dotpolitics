import React, {Component} from 'react';
import {
    withRouter
} from "react-router-dom";
import {FormControl, InputGroup, Dropdown, DropdownButton, Button, Form} from 'react-bootstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            filter: 'Representatives',
            filters: ['Representatives', 'Polls'],
            redirect: false
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
        const {filter, query} = this.state;
        console.log(filter);
        let encoded_address = encodeURIComponent(query);
        this.props.history.push(`/search/${filter}/${encoded_address}`);
    }

    render() {
        const {query, filter, filters} = this.state;
            return (
                <>
                    <Form onSubmit={this.handleSubmit}>
                    <InputGroup >
                    <FormControl value={query} onChange={this.handleQuery} 
                        placeholder="Search" 
                        aria-label="Search Bar" 
                        aria-describedby="basic-addon2"
                    />
                
                    <DropdownButton
                        as={InputGroup.Append}
                        variant="outline-secondary"
                        title="Filter"
                        id="input-group-dropdown-2"
                    >
                        {filters.map(item => {
                            return (<Dropdown.Item onChange={this.handleFilter}>{item}</Dropdown.Item>);
                        })}
                    </DropdownButton>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}> Search </Button>
                    </InputGroup>
                    </Form>
                </>
        );
    }
}

export default withRouter(SearchBar);