import React, {useState} from 'react';
import ResultCard from '../cards/result';
import {
    useLocation
} from "react-router-dom";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const RepByAddress = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const key = "AIzaSyDggZlSpjNNce614YxmnzLWCBm7QbN_-3A";
    //const query = useQuery();
    const query = props.match.params.query;
    console.log(query);
    React.useEffect(() => {
        fetch(`https://www.googleapis.com/civicinfo/v2/representatives?key=${key}&address=${query}`)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(isLoaded => true);
                setItems(items => result.officials);
                console.log(result);
            },

            (er) => {
                setIsLoaded(isLoaded => true);
                setError(error => er);
            });
    }, []);

    if(error) {
        return (<>Error: {error.message}</>);
    } else if(!isLoaded) {
        return (<>Loading Search Results...</>);
    } else {
        return (
            <>
                {items.map((item,index) => (
                    <ResultCard key={index} item={item}/>
                ))}
            </>
        );
    }
}

export default RepByAddress;