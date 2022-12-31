import { memo } from 'react';
import Footerinfo from '../Footerinfo';
import './styles.scss'

function Footer(){
    return(
        <footer>
            <Footerinfo logo={true} title="Logo" text1='Sobre nós' text2='Mural de memórias' text3='Eventos Gudi' text4='Nosso blog' />
            <Footerinfo logo={false} title="Contato" text1='Chat Virtual' text2='SAC Online' text3='Ouvidoria' text4='FAQ' />
            <Footerinfo logo={false} title="Benefícios" text1='Conta Digital Gudi' text2='Viaje com Milhas' text3='C6 Átomos' text4='ID Jovem' />
            <Footerinfo logo={false} title="Lugares" text1='O melhor do Brasil' text2='Cidades frequentes' text3='Pontos turísticos' text4='Restaurantes' />
            <Footerinfo logo={false} title="Curiosidades" text1='Culturae tradições' text2='Pratos típicos' text3='Mitos brasileiros' text4='Carnaval' />
        </footer>
    )
}

export default memo(Footer);