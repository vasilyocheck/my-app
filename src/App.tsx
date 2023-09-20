import React, {useState} from 'react';
import './App.css';
import UncontrolledAccordion from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import Select from "./components/Select/Select";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;


function App() {
    const [isOn, setIsOn] = useState(true);
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionIsCollapsed, setAccordionIsCollapsed] = useState<boolean>(false);
    const [selectValue, setSelectValue] = useState('choose the city');
    const changeIsOnStatus = () => {
        setIsOn(!isOn);
    }

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
            <Select value={selectValue} onChange={changeSelectValue} items={cities} />
            <TitleApp title={'This is APP COMPONENT'} />
            <TitleApp title={'Second Component'} />
            <Accordion titleValue='Menu 3'
                       setAccordionIsCollapsed={setAccordionIsCollapsed}
                       accordionIsCollapsed={accordionIsCollapsed}/>
            <UncontrolledAccordion titleValue={'Menu 1'} />
            <UncontrolledAccordion titleValue={'Menu 2'} />
            <Rating value={ratingValue}
                    changeRating={changeRating}
            />
            <UncontrolledRating />
            <OnOff status={isOn} changeIsOnStatus={changeIsOnStatus}/>
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
