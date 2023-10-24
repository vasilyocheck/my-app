import React, {useEffect, useState} from 'react';
import {makeDoubleDigitClock} from "./utilities/clock-double-digits";

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    const hours = makeDoubleDigitClock(date.getHours());
    const minutes = makeDoubleDigitClock(date.getMinutes());
    const seconds = makeDoubleDigitClock(date.getSeconds());

    return (
        <div>
            <span>{hours} : </span>
            <span>{minutes} : </span>
            <span>{seconds}</span>
        </div>
    );
};