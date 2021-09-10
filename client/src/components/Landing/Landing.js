import React, { useEffect, useState } from "react"; //, useState
import { useDispatch } from "react-redux"; //, useSelector
import axios from "axios";
import { Link } from "react-router-dom";
//import { store } from "../../redux/store";
import { addAllFromApiWeb } from "../../redux/actions";
import landing from "./Landing.module.css";


const URL_ALL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY1 = "6559f189ce464b11a06f9cc77af34437"

const RESULT_NUMBER = 100
const ADD_INFO = "true";

export default function LandingPage() {

    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(()=>{
        const data = async()=>{
            try{
                console.log(`${URL_ALL}?apiKey=${API_KEY1}&number=${RESULT_NUMBER}&addRecipeInformation=${ADD_INFO}`)
                let answer = await axios.get(
                    `${URL_ALL}?apiKey=${API_KEY1}&number=${RESULT_NUMBER}&addRecipeInformation=${ADD_INFO}`
                )
                answer = answer.data.results
                dispatch(addAllFromApiWeb(answer))
                setLoading(false)
                //console.log("ENTRE AL USE EFFECT, Array =", Array.isArray(answer), answer)
            }
            catch(err){
                console.log("ERRPR DEL USE EFFECT",err)
            }
        }
        data()
    }, [])

    return (
        <div className={landing.Landing}>
            <h1 className={landing.Header}> Ready to cook? </h1>
            <Link to='/home'>
                <button className={landing.goHome} disabled={loading}> {loading? "Loading...":"Enter Site"} </button>
            </Link>
        </div>
    )
}
