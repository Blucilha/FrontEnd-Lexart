import React, { useState } from "react";
import ListContext from "./CreateContext";

function ListProvider({ children }) {
    const [list, setList] = useState([]);

    const value = {
        list,
        setList,
    }

    return (
        <ListContext.Provider value={ value } >
            { children }
        </ListContext.Provider>
    )
}

export default ListProvider;
