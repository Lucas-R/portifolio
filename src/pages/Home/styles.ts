import styled from "styled-components";
import { borderRadiusAnimate } from "../../assets/animations/borderRadiusAnimate";
import { bounce } from "../../assets/animations/bounce";
import { pxToRem } from "../../assets/utils/pxToRem";
import { color } from "../../Theme/colors";
import { screen } from "../../Theme/sizes";
import { ContainerDefault } from "../../Theme/styles";
import avatar from './../../assets/images/perfil.png';

export const ContainerHome = styled(ContainerDefault)`
    height: 100vh;
    background-color: ${color.dark};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: ${screen.md}) {
        flex-direction: row;
    }
`;

export const WrapperTextsHome = styled.div`
    display: flex;
    flex: 2;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TitleHome = styled.h1`
    color: white;
    margin-bottom: 20px;
    width: 100%;
    max-width: ${pxToRem(500)};
    font-size: ${pxToRem(40)};

    span{
        font-size: ${pxToRem(30)};
    }
`;

export const DescriptionHome = styled.p`
    color: white;
    font-size: 14px;
    width: 100%;
    max-width: ${pxToRem(500)};

    @media (min-width: ${screen.md}) {
        font-size: ${pxToRem(18)}
    }
`;

export const WrapperAvatar = styled.div`
    display: flex;
    flex: 2;
    align-items: center;
    justify-content: center;
`;

export const Avatar = styled.div`
    width: ${pxToRem(250)};
    height: ${pxToRem(250)};
    background-image: url(${avatar});
    background-size: cover;
    animation: 30s ${borderRadiusAnimate} linear infinite;

    @media (min-width: ${screen.md}) {
        width: ${pxToRem(400)};
        height: ${pxToRem(400)};
    }
`;

export const WrapperButtonHome = styled.div`
    display: flex;
    flex: 1;
    align-items: flex-end;
    animation: 3s ${bounce} 3s infinite;

    @media (min-width: ${screen.md}) {
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
    }
`;