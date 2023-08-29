import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";


function App() {
    const [isOn, setIsOn] = useState(true);

    const changeIsOnStatus = () => {
        setIsOn(!isOn);
    }

    return (
        <div className={'App'} >
            <TitleApp title={'This is APP COMPONENT'} />
            <TitleApp title={'Second Component'} />
            <Accordion titleValue={'Menu 1'} />
            <Accordion titleValue={'Menu 2'} />
            <Rating/>
            {/*<Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
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
