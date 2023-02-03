import React from "react";
import Banner from "../components/Banner/Banner";
import Season from "../components/Season/Season";
import Woman from "../components/Woman/Woman";
import Man from "../components/Man/Man";

const Home = () =>{
    return(
        <div>
            <Banner/>
            <Season/>
            <Man/>
            <Woman/>
        </div>
    );
};
export default Home