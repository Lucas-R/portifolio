import { keyframes } from "styled-components";

export const bounce = keyframes`
   0%, 10%, 20%, 30%, 50%, 70%, 80%, 90%, 100% {transform: translateY(0);} 
   40% {transform: translateY(-20px);} 
   60% {transform: translateY(-5px);}
`;