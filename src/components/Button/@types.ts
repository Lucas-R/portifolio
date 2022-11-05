export type ButtonProps = {
    children?: JSX.Element;
    label?: string;
    background: string;
    color?: string;
    onClick: () => void;
}

export type ButtonStyleProps = {
    background: string;
}