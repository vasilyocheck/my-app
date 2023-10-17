import {useEffect, useState} from "react";
import {log} from "util";

export default {
    title: 'UseEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1);
    console.log('Simple Example');

    useEffect(() => {
        console.log('useEffect is launched');
        // api.getUsers().then('')
        // setInterval
        //indexDB
        //document.getElementId
        document.title = 'Counter ' + counter;
    });
    return (
        <>
            <h2>Hello, {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    );
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1)

    console.log('SetTimeout Example');

    /*useEffect(() => {

        console.log('setTimeout is launched');
        setTimeout(() => {
            document.title = 'counter:' +counter;
        }, 1000);
    }, [counter]);*/

    /* useEffect(() => {

         setInterval(() => {
             setCounter(state => state + 1);

         }, 1000);
     },[]);*/

    console.log(counter);

    return (
        <>
            <h2>Hello, {counter} true counter</h2>
            {/*<button onClick={() => setCounter(counter + 1)}>counter +</button>*/}

            <h3>Fake: {fake}</h3>
            {/*<button onClick={() => setFake(fake + 1)}>fake +</button>*/}
        </>
    );
}

export const ClockDemo = () => {
    const currentDate = new Date;
    const initialSeconds = currentDate.getHours() * 3600 + currentDate.getMinutes() * 60 + currentDate.getSeconds();
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {

       setInterval(() => {
           setSeconds(state => state + 1);
       }, 1000);
   },[]);

    const days = Math.floor(seconds/86400);
    const hours = Math.floor((seconds - days * 86400) / 3600);
    const minutes = Math.floor((seconds - days * 86400 - (hours * 3600)) / 60);
    const sec = seconds - days * 86400 - hours * 3600 - minutes * 60;

    const addZeros = (num: number) => {
        return num < 10 ? '0' + num : num;
    }

    return (
        <>
            <h2>{addZeros(hours)} : {addZeros(minutes)} : {addZeros(sec)}</h2>
        </>
    );

}