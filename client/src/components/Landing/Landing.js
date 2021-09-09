import React, { useEffect } from "react"; //, useState
import { useDispatch } from "react-redux"; //, useSelector
import axios from "axios";
import { Link } from "react-router-dom";
//import { store } from "../../redux/store";
import { addAllFromApiWeb } from "../../redux/actions";
import landing from "./Landing.module.css";

export default function LandingPage() {

    const dispatch = useDispatch()

    useEffect(()=>{
        const data = async()=>{
            try{
                let answer = await axios.get(
                    "https://api.spoonacular.com/recipes/complexSearch?apiKey=6559f189ce464b11a06f9cc77af34437&number=100&addRecipeInformation=true"
                )
                answer = answer.data.results
                dispatch(addAllFromApiWeb(answer))
                console.log("ENTRE AL USE EFFECT, Array =", Array.isArray(answer), answer)
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
                <button className={landing.goHome}> Enter Site </button>
            </Link>
        </div>
    )
}
