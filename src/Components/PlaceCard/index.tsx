import { memo } from "react";
import './styles.scss';

type PlaceInfoProps = {
    name: string;
    image: string;
}

function PlaceCard({name, image}: PlaceInfoProps){
    return(
        <div className="city-image" style={{backgroundImage: `url(${image})`}}>
            <div className="name-box">
                <p className="city-name">{name}</p>
            </div>
        </div>
    )
}

export default memo(PlaceCard);