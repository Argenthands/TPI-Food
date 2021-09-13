import React, { useEffect } from "react"; //, useState
import { useDispatch } from "react-redux";//, useSelector en lugar de importar el store y traer con useState
import axios from "axios";
//import { store } from "../../redux/store";
//import { Link } from "react-router-dom";
import { getAllfromDb, } from "../../redux/actions";
import HomeStyle from "./Home.module.css";
import FilterBar from "../FilterBar/FilterBar";
import Pagination from "../Pagination/Pagination";

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


    return(
        <div className={HomeStyle.Home}>
            <header>
                <FilterBar />
            </header>
            <div>
                <Pagination />
            </div>
        </div>
    )
}

export default Home