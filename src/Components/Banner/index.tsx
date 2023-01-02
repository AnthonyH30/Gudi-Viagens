import { memo } from "react";
import Btn from "../Btn";
import Input from "../Input";
import Title from "../Title";
import './styles.scss';

function Banner(){
    return(
        <div className="banner" id="sobre">
            <Title style={{color: '#005BD5'}} text="Para qual estado você deseja ir?" />
            <form>    
                <Input placeholder="Pesquise" />
                <Btn text="Buscar" />
            </form>
        </div>
    )
}

export default memo(Banner);