import React from "react";

const Items = ({ items }) => {
    const renderedItems = items.map((item, index) => {
        return(
            <div key={index} className="flex items-center justify-between border m-2 p-2 rounded shadow">
                <a href={`https://www.boardgamegeek.com/boardgame/${item.id}`}>
                    <h1 className="text-lg font-bold">{item.name.value}</h1> 
                    {item.yearpublished.value ? <div>({item.yearpublished.value})</div> : null}
                </a>
                <button className="border bg-slate-500 text-white rounded p-2">Add to Database</button>
            </div>
        );
    });

    return(
        <>
            {renderedItems}
        </>
    );
};

export default Items;