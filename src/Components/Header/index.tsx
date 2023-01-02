import { memo, useState } from "react";
import Logo from '../../assets/logo.svg';
import Btn from "../Btn";
import './styles.scss';
import { RiMenu3Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';


Modal.setAppElement('#root');
function Header(){
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    }
    
    return(
        <header>
            <figure>
                <img src={Logo} alt="Gudi o bom da vida é viver" />
            </figure>
            <nav>
                <ul>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#beneficios">Beneficios</a></li>
                    <li><a href="#contato">Contato</a></li>
                    <Btn text="Agendar" />
                </ul>
            </nav>
            <div className="mobile" onClick={toggleModal}>
                {modalIsOpen ? <AiOutlineClose color="#005BD5" size={25} /> : <RiMenu3Line color="#005BD5" size={25} />}
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName='modalOverlay'
                className='modalContent'
            >
                <nav>
                    <ul>
                        <li onClick={toggleModal}><a href="#sobre">Sobre</a></li>
                        <li onClick={toggleModal}><a href="#beneficios">Beneficios</a></li>
                        <li onClick={toggleModal}><a href="#contato">Contato</a></li>
                        <Btn text="Agendar" />
                    </ul>
                </nav>
            </Modal>
        </header>
    )
}

export default memo(Header);