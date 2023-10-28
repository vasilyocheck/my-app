import React, {FC, useEffect, useState} from 'react';
import {makeDoubleDigitClock} from "./utilities/clock-double-digits";
import styled from "styled-components";
import bgImage from '../../assets/img/clock-face.png';

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

    const secDeg = date.getSeconds() * 6;
    const minDeg = date.getMinutes() * 6 + date.getSeconds() / 10;
    const hrDeg = date.getHours() % 12 * 30 + date.getMinutes() * 0.5;

    return (
        <div>
            <CypherClock hours={hours} minutes={minutes} seconds={seconds} />
            <StyledAnalogClock bgImage={bgImage}>
                <StyledHoursArrow degree={hrDeg}/>
                <StyledMinutesArrow degree={minDeg}/>
                <StyledSecondsArrow degree={secDeg} />
            </StyledAnalogClock>
        </div>
    );
};

type CypherClockPropsType = {
    hours: string
    minutes: string
    seconds: string
}
const CypherClock: FC<CypherClockPropsType> = ({hours, minutes, seconds}) => {
    return (
        <div>
            <span>{hours} : </span>
            <span>{minutes} : </span>
            <span>{seconds}</span>
        </div>
    );
}

type StyledAnalogClockPropsType = {
    bgImage: string
}

const StyledAnalogClock = styled.div<StyledAnalogClockPropsType>`
  width: 400px;
  height: 400px;
  background-color: #c0fc49;
  border-radius: 50%;
  position: relative;
  background-image: ${props => `url(${props.bgImage})`};
  background-position: center;
  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    background-color: #000;
    left: calc(50% - 5px);
    top: calc(50% - 3px);
  }
`;

type StyledSecondsArrowPropsType = {
    degree: number
}

const StyledSecondsArrow = styled.div<StyledSecondsArrowPropsType>`
  height: 180px;
  width: 1px;
  position: absolute;
  left: 50%;
  top: 20px;
  transform-origin: bottom left;
  transform: ${props => `rotate(${props.degree}deg)`};
  background-color: red;  
`;

type StyledMinutesArrowPropsType = {
    degree: number
}

const StyledMinutesArrow = styled.div<StyledMinutesArrowPropsType>`
  height: 190px;
  width: 3px;
  background-color: black;
  position: absolute;
  left: 50%;
  top: 10px;
  transform-origin: bottom left;
  transform: ${props => `rotate(${props.degree}deg)`};  
`;

type StyledHoursArrowPropsType = {
    degree: number
}

const StyledHoursArrow = styled.div<StyledHoursArrowPropsType>`
  height: 130px;
  width: 4px;
  background-color: black;
  position: absolute;
  left: 50%;
  top: 70px;
  transform-origin: bottom left;
  transform: ${props => `rotate(${props.degree}deg)`}
`;