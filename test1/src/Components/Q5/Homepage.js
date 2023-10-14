import React, { useContext } from "react";
import { MyContext } from "./GlobalContext";

const Homepage = () => {

    const { state, dispatch } = useContext(MyContext);

    return (
        <div>
            <h1>Homepage</h1>
            <h1>counter : {state.counter}</h1>
            <button onClick={() => dispatch({type : "INCREMENT"})}>+</button>
            <button onClick={() => dispatch({type : "DECREMENT"})}>-</button>
            <button onClick={() => dispatch({type : "RESET"})}>Reset</button>
        </div>
    )
}

export default Homepage;