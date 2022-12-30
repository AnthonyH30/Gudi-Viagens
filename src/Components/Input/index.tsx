import { InputHTMLAttributes, memo } from "react";
import './styles.scss';

type MyInputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

function Input({placeholder}: MyInputProps){
    return <input type='text' placeholder={placeholder} />
}

export default memo(Input);