import { memo } from "react";
import './styles.scss';

type ButtonProps ={
    text: String
}

function Btn({text}: ButtonProps){
    return <button>{text}</button>
}

export default memo(Btn);