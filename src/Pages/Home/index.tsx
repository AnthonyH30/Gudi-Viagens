import React, { memo } from "react";
import Banner from "../../Components/Banner";
import Contato from "../../Components/Contato";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Mural from "../../Components/Mural";

function Home(){
    return(
        <>
            <Header />
            <Banner />
            <Mural />
            <Contato />
            <Footer />
        </>
    )
}

export default memo(Home);