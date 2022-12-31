import { memo } from "react"
import './styles.scss';
import Logogudi from '../../assets/logo.svg';

type FooterInfoProps ={
    logo: boolean;
    title: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
}

function FooterInfo({logo, title, text1, text2, text3, text4}:FooterInfoProps){
    return(
        <ul className="footerinfos">
            <li className="title">{logo ? <img src={Logogudi}></img> : title}</li>
            <li>{text1}</li>
            <li>{text2}l</li>
            <li>{text3}</li>
            <li>{text4}</li>
        </ul>
    )
}

export default memo(FooterInfo);