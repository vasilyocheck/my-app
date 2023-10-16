import {useMemo, useState} from "react";

export default {
    title: 'useState demo'
}

const generatData = () => {
    //some difficult counting here...
    console.log('generateData is launched');
    return 123456789;
}

export const Example1 = () => {
    console.log('Example 1');

    //const value = useMemo(generatData, []);

    const [counter, setCounter] = useState(generatData);

    const increment = (state: number) => {
        return state + 1;
    }

    return (
        <>
            <button onClick={() => setCounter(increment)}>+</button>
            <h1>{counter}</h1>
        </>
    );
}