import React, { useState } from "react";

function State() {
    const [count, setcount] = useState(1);

    const inc = () => {
        setcount(count + 1);
    }
    const dec = () => {
        setcount(count - 1);
    }
    return (
        <div>
         <p>Count: {count}</p>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
        </div>
    );
}

export default State;
