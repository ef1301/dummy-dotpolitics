import React, {Component} from 'react';

export default class RepByAdress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        }
    }

    componentDidMount() {
        const key = "AIzaSyDggZlSpjNNce614YxmnzLWCBm7QbN_-3A";
        let encoded_address = encodeURI(this.props.addess);
        fetch(`https://www.googleapis.com/civicinfo/v2/representatives?key=${key}&address=${encoded_address}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.elections
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
        return(
            <div></div>
        );
    }
} 