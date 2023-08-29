import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string

}

const Accordion: React.FC<AccordionPropsType> = (props) => {
    const [toggle, setToggle] = useState(false);
    const onClickToggleHandler = () => setToggle(!toggle);
    return (
        <div>
            <AccordionTitle title={props.titleValue} callBack={onClickToggleHandler}/>
            { toggle && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    callBack: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={props.callBack}>{props.title}</h3>
    );
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion;