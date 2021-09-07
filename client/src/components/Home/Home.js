import React from "react";
import { store } from "../../redux/store";
//import { Link } from "react-router-dom";
import HomeStyle from "./Home.module.css";
import Card from "../Card/Card";

const Home = ()=>{
    const props = store.getState();
    let allRecipes = props.reducer.recipes
    //console.log(allRecipes)
    return(
        <div className={HomeStyle.Home}>
            {allRecipes.map((props)=>(
                <Card key={props.id} props={props}/>
            ))}
        </div>
    )
}

export default Home