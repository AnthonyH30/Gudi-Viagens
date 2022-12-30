import { memo } from "react";
import Input from "../Input";
import Title from "../Title";
import './styles.scss';


function Contato(){
    return(
        <div className="contato">
            <Title style={{color: 'white'}} text="Fale conosco" />
            <form>
                <Input style={{width: '334px'}} placeholder="Diga o seu melhor email" />
                <Input style={{width: '334px'}} placeholder="Assunto" />
                <textarea placeholder="Escreva a sua mensagem"></textarea>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default memo(Contato);