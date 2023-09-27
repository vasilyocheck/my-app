import React, {useState} from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsItems = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

const Select:React.FC<SelectPropsItems> = (props) => {
    const [isShown, setIsShown] = useState(false);

    const changeIsShownHandler = () => {
        setIsShown(!isShown);
    }

    const changeValue = (title: string) => {
        props.onChange(title);
        setIsShown(false);
    }


    return (
        <div>
            <div className={s.itemBlock + ' ' + s.optionsSelector}
                 onClick={changeIsShownHandler}
            >{props.value}</div>
            {isShown && props.items.map((i, index) => {
                return(
                    <div key={props.value}
                         className={s.itemBlock + ' ' + s.option}
                         onClick={() => changeValue(i.title)}
                    >{i.title}</div>
                );
            })}
        </div>
    );
};

export default Select;