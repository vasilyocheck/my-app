type AccordionPropsType = {
    titleValue: string
    setAccordionIsCollapsed: (accordionIsCollapsed: boolean) => void
    accordionIsCollapsed: boolean
}

export const Accordion: React.FC<AccordionPropsType> = (props) => {
    const toggleHandler = () => {
        props.setAccordionIsCollapsed(!props.accordionIsCollapsed);
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue} callBack={toggleHandler}/>
            { !props.accordionIsCollapsed && <AccordionBody/>}
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
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
        </ul>
    );
}