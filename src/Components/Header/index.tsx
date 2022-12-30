import { memo } from "react";
import Logo from '../../assets/logo.svg';
import Btn from "../Btn";
import './styles.scss';

function Header(){
    return(
        <header>
            <figure>
                <img src={Logo} alt="Gudi o bom da vida é viver" />
            </figure>
            <nav>
                <ul>
                    <li>Sobre</li>
                    <li>Beneficios</li>
                    <li>Contato</li>
                    <Btn text="Agendar" />
                </ul>
            </nav>
        </header>
    )
}

export default memo(Header);