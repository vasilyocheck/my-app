import React, {useState} from "react";


export function Rating() {
    const [value, setValue] = useState(0);
    const onClickValueHandler = (value: number)=>setValue(value);
    return (
        <div>
            <Star selected={value > 0} callBack={() =>onClickValueHandler(1)}/>
            <Star selected={value > 1} callBack={() =>onClickValueHandler(2)}/>
            <Star selected={value > 2} callBack={() => onClickValueHandler(3)}/>
            <Star selected={value > 3} callBack={() =>onClickValueHandler(4)}/>
            <Star selected={value > 4} callBack={() =>onClickValueHandler(5)}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    callBack: () => void
}

const Star = (props: StarPropsType) => {

    return (
        <div className={'Star'} onClick={props.callBack}>
            {props.selected ? <span><b>star </b></span> : <span>star </span>}
        </div>
    );
}