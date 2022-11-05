import { IconProps, IconSvgProps } from "./@types";

const ArrowDownCircle = ({size, color}: IconSvgProps) => {
    return(
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 40 40" 
            fill="none" 
        >
            <path 
                d="M19.9999 36.6667C29.2047 36.6667 36.6666 29.2048 36.6666 20C36.6666 10.7953 29.2047 3.33337 19.9999 3.33337C10.7952 3.33337 3.33325 10.7953 3.33325 20C3.33325 29.2048 10.7952 36.6667 19.9999 36.6667Z" 
                stroke={color}
                stroke-width="4.17" 
                stroke-linecap="round" 
                stroke-linejoin="round"
            />
            <path 
                d="M13.3333 20L19.9999 26.6667L26.6666 20" 
                stroke={color}
                stroke-width="4.17" 
                stroke-linecap="round" 
                stroke-linejoin="round"
            />
            <path 
                d="M20 13.3334V26.6667" 
                stroke={color} 
                stroke-width="4.17" 
                stroke-linecap="round" 
                stroke-linejoin="round"
            />
        </svg>
    );
}

export const Icon = ({name, size, color}: IconProps) => {
    const renderIcon = () => {
        switch (name) {
            case 'arrowDownCircle' :
                return <ArrowDownCircle size={size} color={color}/>
            default :
                return null
        }
    }

    return renderIcon();
}