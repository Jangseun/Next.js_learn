"use client"
import { useState } from "react";

export default function Count() {
    const [counter, setCounter] = useState(0);

    const plus = () => {
        setCounter(counter + 1);
    }

    const minus = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(0);
    }

    const bustyle = {
        width:'10vw',
        height: '7vh',
        fontSize: '3vh',
        fontWeight: 'bold',
        borderRadius: '5vw',
        margin: '1vw'
    }

    const hstyle = {
        color: 'skyblue',
        fontSize: '20vw',
        marginLeft: '7vw'
    }

    return(
        <div>
            <h1 style={hstyle}>{counter}</h1>
            <button onClick={plus} style={bustyle}>+</button>
            <button onClick={minus} style={bustyle}>-</button>
            <button onClick={reset} style={bustyle}>reset</button>
        </div>
    );
}