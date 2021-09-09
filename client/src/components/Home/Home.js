import React, { useEffect } from "react"; //, useState
import { useDispatch } from "react-redux";//, useSelector
import axios from "axios";
import { store } from "../../redux/store";
//import { Link } from "react-router-dom";
import { getAllfromDb, } from "../../redux/actions";
import HomeStyle from "./Home.module.css";
import Card from "../Card/Card";

const Home = ()=>{

    const dispatch = useDispatch()
    useEffect(()=>{
        const data = async()=>{
            try{
                let answer = await axios.get(
                    "http://localhost:3001/recipe/all"
                    )
                answer = answer.data
                dispatch(getAllfromDb(answer))
            }
            catch(err){
                console.log("ERROR DEL USE EFFECT", err)
            }
        }
        data()
    }, [])

    const props = store.getState();
    let allRecipesWeb = props.reducer.recipesWeb
    let allRecipes = allRecipesWeb;

    return(
        <div className={HomeStyle.Home}>
            {allRecipes.map((props)=>(
                <Card key={props.id} props={props}/>
            ))}
        </div>
    )
}

export default Home