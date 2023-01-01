import { memo } from "react";
import InfoCard from "../InfoCard";
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';

function Benefits(){
    return(
        <section>
            <InfoCard image={image1} invert={false} />
            <InfoCard image={image2} invert={true} />
            <InfoCard image={image3} invert={false} />
        </section>
    )
}

export default memo(Benefits);