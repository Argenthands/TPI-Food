import React from "react";

import FormStyle from "./FormAdRecipe.module.css";

const FormAdRecipe = ()=>{
    let context = {
        title: "",
        image: "",
		summary: "",
		spoonacularScore: 0,
		healthScore: 0,
		//lista de pasos para cocinar
		steps: []
    }
    return (
        <div className={FormStyle.Body}>
            <form children={FormStyle.Form}>
                <ul>
                    <li className={FormStyle.ListElement}>
                        <label className={FormStyle.Lables}>{"Title:"}</label>
                        <input className={FormStyle.FormsFalse} type="text" placeholder={"Title:"}/>
                    </li>

                    <li className={FormStyle.ListElement}>
                        <label className={FormStyle.Lables}>{"Image:"}</label>
                        <input className={FormStyle.Forms}  type="url" placeholder ={"Image:"}/>
                    </li>

                    <li className={FormStyle.ListElement}>
                        <label className={FormStyle.Lables}>{"Summary:"}</label>
                        <input className={FormStyle.Forms}  type="Text" placeholder={"Summary:"}/>
                    </li>

                    <li className={FormStyle.ListElement}>
                        <label className={FormStyle.Lables}>{"Spoonacular Score:"}</label>
                        <input className={FormStyle.Forms}  type="number" placeholder={"Spoonacular Score:"}/>
                    </li>

                    <li className={FormStyle.ListElement}>
                        <label className={FormStyle.Lables}>{"Health Score:"}</label>
                        <input className={FormStyle.Forms}  type="number" placeholder={"Health Score:"}/>
                    </li>

                    <li className={FormStyle.ListElement}>
                        <label className={FormStyle.Lables}>{"Steps:"}</label>
                        <input className={FormStyle.Forms}  type="Text" placeholder={"Steps:"}/>
                    </li>
                </ul>
                
            </form>
        </div>
    )
}

export default FormAdRecipe