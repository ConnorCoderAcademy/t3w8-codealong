// Data we want to store in this context provider:
// https://pokeapi.co/api/v2/

import { createContext } from "react";

export const ApiContext = createContext("https://pokeapi.co/api/v2/");

function ApiProvider(props) {
    return(
        <ApiContext.Provider>
            props.children
        </ApiContext.Provider>
    )
}