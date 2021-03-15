import React, {Component} from 'react';
import {
    Redirect,
    withRouter
} from "react-router-dom";
import {FormControl, InputGroup, Dropdown, DropdownButton, Button, Form} from 'react-bootstrap';


/*export const QueryParams = (encoded_address) => {
    return (<Link to={{
        pathname: `/search?query=${encoded_address}`,
    }} />);
}*/
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

    renderRedirect = () => {
        const {filter, query} = this.state;
        console.log(filter);
        let encoded_address = encodeURIComponent(query);
        console.log(encoded_address);
        return( <Redirect to={{
            pathname: `/search/${query}`
        }} />);
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const {filter, query} = this.state;
        console.log(filter);
        let encoded_address = encodeURIComponent(query);
        console.log(this.props);
        this.props.history.push(`/search/${query}`);
    }

    render() {
        const {query, filters} = this.state;
        //let encoded_address = encodeURIComponent(query);
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
                        onSelect={this.handleFilter}
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