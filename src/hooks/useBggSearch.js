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

        setResult(data.item);

        console.log(result)
    };
    
    return [result, apiCall];
};

export default useBggSearch;