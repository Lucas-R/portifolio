import { Icon } from "../../assets/Icon";
import { Button } from "../../components/Button";
import { color } from "../../Theme/colors";
import {
    WrapperAvatar,
    Avatar,
    ContainerHome,
    WrapperTextsHome,
    TitleHome,
    DescriptionHome,
    WrapperButtonHome
} from "./styles";

export const Home = () => {
    const handleButton = () => {
        
    }

    return(
        <ContainerHome>
            <WrapperTextsHome>
                <TitleHome><span> Olá, eu sou </span> <br /> Lucas Rodrigues </TitleHome>
                <DescriptionHome> 
                    Web developer | Front-End . Cursei Informática para internet na Etec de Itanháem e focado em buscar mais conhecimento. Sou apaixonado pelo mundo da programação a muitos anos e sempre estou aberto a novas oportunidades e desafios. 
                </DescriptionHome>
            </WrapperTextsHome>

            <WrapperAvatar>
                <Avatar />
            </WrapperAvatar>

            <WrapperButtonHome>
                <Button
                    background="none"
                    onClick={() => handleButton()}
                >
                    <Icon name="arrowDownCircle" size={50} color={color.sun}/>
                </Button>
            </WrapperButtonHome>
        </ContainerHome>
    );
}