import React, { memo } from "react";
import Banner from "../../Components/Banner";
import Benefits from "../../Components/Benefits";
import Contato from "../../Components/Contato";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Mural from "../../Components/Mural";
import Places from "../../Components/Places";

function Home(){
    return(
        <>
            <Header />
            <Banner />
            <Benefits />
            <Places />
            <Mural />
            <Contato />
            <Footer />
        </>
    )
}

export default memo(Home);