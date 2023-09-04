import {RatingValueType} from "../../App";

type RatingPropsType = {
    value: number
    changeRating: (newRatingValue: RatingValueType) => void
}
export function Rating(props: RatingPropsType) {


    return (
        <div>
            <Star selected={props.value > 0} starNum={1} changeRating={props.changeRating}/>
            <Star selected={props.value > 1} starNum={2} changeRating={props.changeRating}/>
            <Star selected={props.value > 2} starNum={3} changeRating={props.changeRating}/>
            <Star selected={props.value > 3} starNum={4} changeRating={props.changeRating}/>
            <Star selected={props.value > 4} starNum={5} changeRating={props.changeRating}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    starNum: RatingValueType
    changeRating: (newRatingValue: RatingValueType) => void

}

const Star = (props: StarPropsType) => {
    const onClickHandler = () => {
        props.changeRating(props.starNum);
    }
    return (
             <span onClick={onClickHandler}>{props.selected ? <b>star </b> : 'star '}</span>
    );
}