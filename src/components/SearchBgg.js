import axios from "axios";
import React, { useState } from "react";
import Items from "./Items";
import Searchbar from "./Searchbar";

const baseUrl = 'http://localhost:3030/bggsearch'

const SearchBgg = () => {
    const [result, setResult] = useState([]);

    const onFormSubmit = (event) => {
        event.preventDefault();
        const term = event.target[0].value;

        const apiCall = async (term) => {
            const { data } = await axios.get(baseUrl, {
                params: {
                    query: term
                }
            });

            setResult(data.item);
            console.log(result)
        };

        apiCall(term);
    };

    return(
        <div>
            <h1>SearchBgg</h1>
            <Searchbar 
                onFormSubmit={onFormSubmit}
                label="Search Boardgamegeek"
            />
            <div>
                <Items items={result} />
            </div>
        </div>
    );
};

export default SearchBgg;