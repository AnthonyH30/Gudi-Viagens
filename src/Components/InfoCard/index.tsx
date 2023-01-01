import { memo } from "react"
import Title from "../Title";
import './styles.scss';

type InfoProps ={
    invert: boolean;
    image: string;
}

function InfoCard({invert, image}: InfoProps){
    return(
        <div style={invert ? {flexDirection: 'row-reverse'} : {}} className="info-container">
            <figure style={{backgroundImage: `url(${image})`}}>

            </figure>
            <aside style={invert ? {background: 'white'} : {}}>
                <div className="info-header">
                    <div style={invert ? {backgroundColor: '#005BD5'} : {}} className="dash"></div>
                    <p style={invert ? {color: '#005BD5'} : {}}>Viagens Nacionais</p>
                </div>
                <div className="text-content">
                    <Title style={invert ? {color: '#005BD5'} : {color: 'white', fontWeight: 'bold'}} text="O clima perfeito, o lugar perfeito" />
                    <p style={invert ? {color: '#005BD5'} : {}} className="info-subtitle">Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço.</p>
                    <button style={invert ? {border: '1px solid #005BD5', color: '#005BD5'} : {}} className="info-btn">Agendar</button>
                </div>
            </aside>
        </div>
    )
}

export default memo(InfoCard);