import React, {useState} from 'react';
import './App.css';
import UncontrolledAccordion from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import Select from "./components/Select/Select";
import {getBanknoteList, getTriangleType, sum} from "./lesson_8/lesson_8";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

const MemoizedSelect = React.memo(Select);
const MemoizedAccordion = React.memo(Accordion);
const MemoizedUncontrolledAccordion = React.memo(UncontrolledAccordion);
const MemoizedRating = React.memo(Rating);
const MemoizedUncontrolledRating = React.memo(UncontrolledRating);
const MemoizedOnOff = React.memo(OnOff);


function App() {
    const [isOn, setIsOn] = useState(true);
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionIsCollapsed, setAccordionIsCollapsed] = useState<boolean>(false);
    const [selectValue, setSelectValue] = useState('choose the city');
    const changeIsOnStatus = () => {
        setIsOn(!isOn);
    }
    let res = getBanknoteList(23);
    console.log(res);

    const changeRating = (newRatingValue: RatingValueType) => {
        setRatingValue(newRatingValue);
    }

    const changeSelectValue = (value: string) => {
        setSelectValue(value);
    }

    const cities = [
        {title: 'Amsterdam', value: 1},
        {title: 'Paris', value: 2},
        {title: 'London', value: 3}
    ];

    return (
        <div className={'App'} >
            <MemoizedSelect value={selectValue} onChange={changeSelectValue} items={cities} />
            <TitleApp title={'This is APP COMPONENT'} />
            <TitleApp title={'Second Component'} />
            <MemoizedAccordion titleValue='Menu 3'
                       setAccordionIsCollapsed={setAccordionIsCollapsed}
                       accordionIsCollapsed={accordionIsCollapsed}/>
            <MemoizedUncontrolledAccordion titleValue={'Menu 1'} />
            <MemoizedUncontrolledAccordion titleValue={'Menu 2'} />
            <MemoizedRating value={ratingValue}
                    changeRating={changeRating}
            />
            <MemoizedUncontrolledRating />
            <MemoizedOnOff status={isOn} changeIsOnStatus={changeIsOnStatus}/>
        </div>

    );
}

type TitleAppPropsType = {
    title: string
}

const TitleApp = (props: TitleAppPropsType) => {
    return(
        <div>{props.title}</div>
    );
}

export default App;
