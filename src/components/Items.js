import React from "react";

const Items = ({ items }) => {
    const renderedItems = items.map((item) => {
        return(
            <div key={item.bggId} className="flex items-center justify-between border m-2 p-2 rounded shadow">
                <a href={`https://www.boardgamegeek.com/boardgame/${item.bggId}`}>
                    <img src={item.thumbnail} className="flex"/>
                    <h1 className="text-lg font-bold">{item.title}</h1> 
                    {item.yearpublished ? <div>({item.yearpublished})</div> : null}
                </a>
                <button className="border bg-slate-500 text-white rounded p-2">Add to Database</button>
            </div>
        );
    });

    return(
        <>
            <div>{renderedItems.length} Results</div>
            {renderedItems}
        </>
    );
};

export default Items;