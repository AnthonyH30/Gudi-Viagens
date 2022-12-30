import React, { memo } from "react";
import Banner from "../../Components/Banner";
import Header from "../../Components/Header";

function Home(){
    return(
        <>
            <Header />
            <Banner />
        </>
    )
}

export default memo(Home);