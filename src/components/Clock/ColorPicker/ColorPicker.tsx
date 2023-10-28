import { HexColorPicker } from "react-colorful";
import {FC} from "react";

type ColorPickerPropsType = {
    color: string
    setColor: (color: string) => void
}

export const ColorPicker: FC<ColorPickerPropsType> = ({color, setColor}) => {
    return <HexColorPicker color={color} onChange={setColor} />;
};