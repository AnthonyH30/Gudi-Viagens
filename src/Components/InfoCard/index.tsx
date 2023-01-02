import { memo, ReactNode } from "react"
import Title from "../Title";
import './styles.scss';

type InfoProps ={
    invert: boolean;
    image: string;
    title: string;
    paragraph: ReactNode;
}

function InfoCard({invert, image, title, paragraph}: InfoProps){
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
                    <Title style={invert ? {color: '#005BD5'} : {color: 'white', fontWeight: 'bold'}} text={title} />
                    <p style={invert ? {color: '#005BD5'} : {}} className="info-subtitle">{paragraph}</p>
                    <button style={invert ? {border: '1px solid #005BD5', color: '#005BD5'} : {}} className="info-btn">Agendar</button>
                </div>
            </aside>
        </div>
    )
}

export default memo(InfoCard);