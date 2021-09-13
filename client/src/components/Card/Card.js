import React, { useState } from "react";
//import { store } from "../../redux/store";
//import { Link } from "react-router-dom";
import CardStyle from "./Card.module.css";
import Description from "../Description/Description";

const Card = (props)=>{

    const { vegetarian, title, image, summary } = props.props
    /*
    let title = props.props.title
    let image = props.props.image
    let summary = props.props.summary
    //summary.replace(/<[^>]*>?/g, '')
    */

    const [showDescription, setShowDescription] = useState(false)

    return(
        <div className={CardStyle.Card}>
            <h3 className={CardStyle.Title}>Recipe: {title}</h3>
            <img className={CardStyle.Image} src={image} alt="" />
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