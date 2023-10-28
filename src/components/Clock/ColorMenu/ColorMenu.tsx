import React, {FC} from 'react';
import styled from "styled-components";
import {ColorPicker} from "../ColorPicker/ColorPicker";

type ColorMenuPropsType = {
    color: string
    setColor: (color: string) => void
    colorMenuStatus: boolean
    changeMenuStatus: () => void
}
export const ColorMenu: FC<ColorMenuPropsType> = ({color, setColor, changeMenuStatus, colorMenuStatus}) => {

    const changeStatus = () => {
        changeMenuStatus();
    }

    const buttonText = colorMenuStatus ? 'закрыть панель цветов' : 'выбрать цвет часов';


    return (
        <StyledColorMenu>
            <StyledShowColorPickerButton
                onClick={changeStatus}
                buttonStatus={colorMenuStatus}
            >{buttonText}
            </StyledShowColorPickerButton>
            {colorMenuStatus ? <ColorPicker color={color} setColor={setColor} /> : null
            }

        </StyledColorMenu>
    );
};

const StyledColorMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;  
`;

type StyledShowColorPickerButtonPropsType = {
    buttonStatus: boolean
}

const StyledShowColorPickerButton = styled.button<StyledShowColorPickerButtonPropsType>`
  border: 1px solid gray;
  border-radius: 15px;
  width: 200px;
  height: 30px;
  transform: ${props => props.buttonStatus ? '': 'translateY(-3px)'};
  box-shadow: ${props => props.buttonStatus ? `2px 2px 1px gray` : `4px 4px 2px gray`};
  background: ${props => props.buttonStatus ? `linear-gradient(#05b409, #b1e3b2)` : `linear-gradient(#b1e3b2, #05b409)`};
  color: ${props => props.buttonStatus ? '#ffff' : '#013d0e'};
  font-weight: ${props => props.buttonStatus ? 'bold' : ''};
  transition: ease-in-out 200ms;
  &:hover {
    font-weight: bold;
  }
`;