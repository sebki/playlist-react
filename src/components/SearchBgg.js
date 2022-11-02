import useBggSearch from "../hooks/useBggSearch";
import Items from "./Items";
import Searchbar from "./Searchbar";

const SearchBgg = () => {
    const [searchResults, search] = useBggSearch();

    return(
        <div>
            <h1>SearchBgg</h1>
            <Searchbar 
                search={search}
                label="Search Boardgamegeek"
            />
            <div>
                <Items items={searchResults} />
            </div>
        </div>
    );
};

export default SearchBgg;