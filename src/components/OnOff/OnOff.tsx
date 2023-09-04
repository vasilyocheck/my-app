import React from 'react';

type OnOffPropsType = {
    status: boolean
    changeIsOnStatus: () => void
}

export const OnOff: React.FC<OnOffPropsType> = (props) => {
    function onClickHandler(){
        props.changeIsOnStatus();
    }
    return (
        <div className='OnOff'>
            <button style={{backgroundColor: props.status ? 'green' : ''}} onClick={onClickHandler}>on</button>
            <button style={{backgroundColor: props.status ? '' : 'red'}} onClick={onClickHandler}>off</button>
            <span className='circle' style={{backgroundColor: props.status ? 'green' : 'red'}}></span>
        </div>
    );
};


