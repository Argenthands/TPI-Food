import React from "react";
import { store } from "../../redux/store";
//import { Link } from "react-router-dom";
import HomeStyle from "./Home.module.css";
import Card from "../Card/Card";

const Home = ()=>{
    const props = store.getState();
    let allRecipesWeb = props.reducer.recipesWeb

    let dbRecipes = props.reducer.recipesDb
    console.log(dbRecipes) //<------------------- estoy viendo como traer las recetas de la base de datos
    let allRecipes = allRecipesWeb;
    for(let i=0; i<dbRecipes.length; i++){
        allRecipes.push(dbRecipes[i])
    }

    console.log(allRecipes)
    return(
        <div className={HomeStyle.Home}>
            {allRecipes.map((props)=>(
                <Card key={props.id} props={props}/>
            ))}
        </div>
    )
}

export default Home