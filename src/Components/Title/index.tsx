import { memo } from "react";
import './styles.scss';

type TitleProps = {
    text: String,
    style?: React.CSSProperties
}

function Title({text, style}: TitleProps){
    return <h2 style={style}>{text}</h2>
}

export default memo(Title);