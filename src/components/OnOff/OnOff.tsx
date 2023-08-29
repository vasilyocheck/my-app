import React from 'react';
import styled, {css} from "styled-components";

type OnOffPropsType = {
    status: boolean
    changeIsOnStatus?: () => void
}

export const OnOff: React.FC<OnOffPropsType> = (props: OnOffPropsType) => {
    return (

        <StyledContainer>
            <StyledOnButton status={props.status} onClick={props.changeIsOnStatus}>on</StyledOnButton>
            <StyledOffButton status={props.status} onClick={props.changeIsOnStatus}>off</StyledOffButton>
            <StyledCircle status={props.status}></StyledCircle>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledOnButton = styled.button<OnOffPropsType>`
  ${props => props.status && css<{ status: boolean }>`
    background-color: green;
  `}
`;
const StyledOffButton = styled.button<OnOffPropsType>`
  ${props => !props.status && css<{ status: boolean }>`
    background-color: red;
  `}
`;

const StyledCircle = styled.div<OnOffPropsType>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  //background-color: gray;
  ${props => props.status && css<{ status: boolean }>`
    background-color: green;
  `}
  ${props => !props.status && css<{ status: boolean }>`
    background-color: red;
  `}
`;

