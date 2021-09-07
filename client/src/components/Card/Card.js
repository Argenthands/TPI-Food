import React from "react";
//import { store } from "../../redux/store";
//import { Link } from "react-router-dom";
import CardStyle from "./Card.module.css";

const Card = (props)=>{
    /*
    const props = store.getState();
    const {title, image} = props.reducer.recipe
    */

    let title = props.props.title
    let image = props.props.image
    //let summary = props.props.summary

    return(
        <div className={CardStyle.Card}>
            <h3 className={CardStyle.Title}>Recipe: {title}</h3>
            <img className={CardStyle.Image} src={image} alt="" />
            <p>description</p>

            
        </div>
    )
}

export default Card