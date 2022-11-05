import styled from "styled-components";
import { ButtonStyleProps } from "./@types";

export const ButtonDefault = styled.button<ButtonStyleProps>`
    width: auto;
    height: 40px;
    padding: 8px 20px;
    border-radius: 4px;
    background-color: ${({background}) => background ?? '#FFF'};
`;

export const ButtonDefaultText = styled.span`
    color: ${({color}) => color ?? '#000'};
    font-weight: 700;
    font-size: 18px;
`;