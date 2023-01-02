import { memo } from "react";
import InfoCard from "../InfoCard";
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';

function Benefits(){
    return(
        <section id="beneficios">
            <InfoCard title="O clima perfeito, no lugar perfeito" paragraph="Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço." image={image1} invert={false} />
            <InfoCard title="Curta uma nova vibe entre amigos" paragraph={<p>Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos <strong>Planos Multi.</strong></p>} image={image2} invert={true} />
            <InfoCard title="Algumas experiências são inexplicáveis" paragraph={<p>Conheça as fontes termais de <strong>Caldas Novas, Goiás.</strong> Águas quentes, num clima sereno, relaxante e natural.</p>} image={image3} invert={false} />
        </section>
    )
}

export default memo(Benefits);