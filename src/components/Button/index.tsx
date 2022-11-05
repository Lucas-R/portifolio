import { ButtonProps } from "./@types";
import { ButtonDefault, ButtonDefaultText } from "./styles";

export const Button = ({children, label, background, color, onClick}: ButtonProps) => {
    return( 
        <ButtonDefault
            background={background}
            onClick={onClick}
        >
            <ButtonDefaultText 
                color={color}
            >
                {label ?? children}
            </ButtonDefaultText>
        </ButtonDefault>
    );
}