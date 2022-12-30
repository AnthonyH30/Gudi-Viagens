import React, { memo } from "react";
import Banner from "../../Components/Banner";
import Contato from "../../Components/Contato";
import Header from "../../Components/Header";

function Home(){
    return(
        <>
            <Header />
            <Banner />
            <Contato />
        </>
    )
}

export default memo(Home);