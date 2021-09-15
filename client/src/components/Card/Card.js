import React, { useState } from "react";
//import { store } from "../../redux/store";
//import { Link } from "react-router-dom";
import CardStyle from "./Card.module.css";
import Description from "../Description/Description";

const Card = (props)=>{

    const { title, image, summary, id } = props.props
    const { vegetarian, vegan, glutenFree, dairyFree, veryHealthy } = props.props

    const [showDescription, setShowDescription] = useState(false)

    return(
        <div className={CardStyle.Card} id={id}>
            <h3 className={CardStyle.Title}>Recipe: {title}</h3>
            <img className={CardStyle.Image} src={image} alt="" />

            <div className={CardStyle.Diets}>
                <div className={CardStyle.Diet}>{vegetarian && "Vegetarian"}</div>
                <div className={CardStyle.Diet}>{vegan &&"Vegan"}</div>
                <div className={CardStyle.Diet}>{glutenFree && "Gluten Free"}</div>
                <div className={CardStyle.Diet}>{dairyFree && "Dairy Free"}</div>
                <div className={CardStyle.Diet}>{veryHealthy && "Very Healthy"}</div>
            </div>

            <p>id:{id}</p>

            <button 
                type="button"
                onClick={()=> setShowDescription(!showDescription)}
            >{
                showDescription?
                "close Description"
                :
                "show Description"
            }</button>
            <div>{showDescription &&
            <Description props={summary}/>
            }
            </div>
        </div>
    )
}

export default Card