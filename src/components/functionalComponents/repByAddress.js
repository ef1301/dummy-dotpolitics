import React, {Component} from 'react';
import ResultCard from '../cards/result';
export default class RepByAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        const key = "AIzaSyDggZlSpjNNce614YxmnzLWCBm7QbN_-3A";
        let encoded_address = encodeURIComponent(this.props.value);
        fetch(`https://www.googleapis.com/civicinfo/v2/representatives?key=${key}&address=${encoded_address}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.officials
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
        console.log(this.props.value);
        const {error, isLoaded, items} = this.state;
        console.log(items);
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
                    {items.map(item => (
                        <ResultCard key={item.id} item={item}/>
                    ))}
                </div>
                
            );
        }
    }
} 