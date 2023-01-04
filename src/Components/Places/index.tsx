import { memo } from "react";
import './styles.scss';
import rj from '../../assets/riodejaneiro.png';
import ro from '../../assets/riodasostras.png';
import cn from '../../assets/caldasnovas.png';
import am from '../../assets/amazonia.png';
import PlaceCard from "../PlaceCard";

type PlaceProps ={
    name: string;
    image: string;
}

const placesInfo: PlaceProps[] = [
    {
        name: "Rio de Janeiro",
        image: rj
    },
    {
        name: "Rio das Ostras",
        image: ro
    },
    {
        name: "Caldas Novas",
        image: cn
    },
    {
        name: "Amazônia",
        image: am
    }
]

function Places(){
    return(
        <section className="card-city-container">
            {placesInfo.map((place) => (
                <PlaceCard key={place.name} name={place.name} image={place.image} />
            ))}
        </section>
    )
}

export default memo(Places);