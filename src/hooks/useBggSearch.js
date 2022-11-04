import axios from "axios";
import { useState } from "react";

const baseUrl = 'http://localhost:3030/bggsearch'

const useBggSearch = () => {
    const [result, setResult] = useState([]);

    const apiCall = async (term) => {
        console.log("apiCall got called with term:", term);
        const { data } = await axios.get(baseUrl, {
            params: {
                query: term
            }
        });

        if (data) {
            setResult(data);
        } else {
            setResult([]);
        };
        
    };
    
    return [result, apiCall];
};

export default useBggSearch;