import { memo } from "react";
import Title from "../Title";
import './styles.scss';
import image1 from "../../assets/Retângulo-197@2x.png";
import image2 from "../../assets/Retângulo-198@2x.png";
import image3 from "../../assets/Retângulo-199@2x.png";
import image4 from "../../assets/Retângulo-200@2x.png";
import image5 from "../../assets/Retângulo-201@2x.png";
import image6 from "../../assets/Retângulo-202@2x.png";
import first from "../../assets/first.svg";
import second from "../../assets/second.svg";
import third from "../../assets/third.svg";
import fourth from "../../assets/fourth.svg";

const images = [image1, image2, image3, image4, image5, image6];

type IconsProps ={
    icon: string;
    text: string;
}

const icons: IconsProps[] = [
{
    icon: first,
    text: 'O melhor do Brasil'
},{
    icon: second,
    text: 'Cidades mais frequentadas'
},{
    icon: third,
    text: 'Pontos turísticos'
},{
    icon: fourth,
    text: 'Restaurantes'
}
];

function Mural(){
    return(
        <section className="mural">
            <p className="subtitle">use a hashtag #brasilisverigudi</p>
            <Title style={{color: '#8B8B8B', fontSize: '33px'}} text="Nosso mural de Experiências" />
            <div className="gallery">
                {images.map((image) => (
                    <img key={image} src={image} alt="image" />
                ))}
            </div>
            <div className="cards">
                {icons.map((icon, index) => (
                    <div className="card-container" style={index % 2 !== 0 ? { backgroundColor: '#005BD5'} : {}} key={icon.text}>
                        <img className="icon" src={icon.icon} alt="icon" />
                        <p className="text" style={index % 2 !== 0 ? { color: '#fff'} : {} } >{icon.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default memo(Mural);