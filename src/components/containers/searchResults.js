import React, {Component} from 'react';
import ResultCard from '../cards/result.jsx';

export default class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            results: [],
        }
    }

    componentDidMount() {
        fetch("https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyDggZlSpjNNce614YxmnzLWCBm7QbN_-3A")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        results: result.items
                    });
                },

            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
            )
    }

    render() {
        const {error, isLoaded, results} = this.state;
        if(error) {
            return (
                <div>Error: {error.message}</div>
            )
        } else if(!isLoaded) {
            return (
                <div>Loading Search Results...</div>
            )
        } else {
            return (
                <div>
                    {results.map(item => (
                        <ResultCard/>
                    ))}
                </div>
                
            );
        }
    }
}