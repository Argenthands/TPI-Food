import React, { useState } from "react";//, useEffect 
import { useDispatch} from "react-redux";

import { newRecipe } from "../../redux/actions"
import FormStyle from "./FormAdRecipe.module.css";

const FormAdRecipe = ()=>{
    const dispatch = useDispatch();
    const [data, setData] = useState({
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
        cheap: false,
        sustainable: false,

        title: "",
        summary: "",
        spoonacularScore: 0,
        image: "",
        healthScore: 0,
        analyzedInstructions: [],
        diets: [],
    });
    
    const handleOnChange = event =>{
        const newData = { ...data }
        newData[event.target.id] = event.target.value
        setData(newData)
    }
    const handleOnCheck = event =>{
        const newData = { ...data }
        newData [event.target.id] = event.target.checked
        setData(newData)
    }
    /*
    //me falta agregar las dietas
    const onChange = event =>{
        data.diets.push(event.target.value)
    }
    */
    const onSubmit = (event) => {
        event.preventDefault();
        if (!data.title) {
          return alert("Please enter a title for your recipe");
        }
        if (!data.summary) {
          return alert("Please enter a resume of your recipe");
        }
        console.log(data)
        dispatch(newRecipe(data));
        alert("Recipe was sucessfully created");
      };

    return (
        <form className={FormStyle.Body} onSubmit={event => onSubmit(event)}>
                <h1>Add New Recipe</h1>
            <form>
                <h3>Description</h3>

                <input className={FormStyle.Inputs} id="title" onChange={event => handleOnChange(event)} type="text" placeholder="title"/> 

                <input className={FormStyle.Inputs} id="summary" onChange={event => handleOnChange(event)} type="text" placeholder="summary"/>
            </form>

            <h3>Socre</h3>

            <form>

                <input className={FormStyle.Inputs} id="spoonacularScore" onChange={event => handleOnChange(event)} type="number" placeholder="Score"/>

                <input className={FormStyle.Inputs} id="healthScore" onChange={event => handleOnChange(event)} type="number" placeholder="Health Score"/>
            </form>

            <h3>Imagen</h3>

            <form>
                <input className={FormStyle.Inputs} id="image" onChange={event => handleOnChange(event)} type="url" placeholder="image"/> 
            </form>

            <h3>Diet</h3>

            <form className={FormStyle.chekForm}>
                <div>
                    <label>Vegetarian</label>
                    <input className={FormStyle.Inputs} id="vegetarian" onChange={event => handleOnCheck(event)} type="checkbox" />
                </div>

                <div>
                    <label>Vegan</label>
                    <input className={FormStyle.Inputs} id="vegan" onChange={event => handleOnCheck(event)} type="checkbox"/>
                </div>

                <div>
                    <label>Gluten Free</label>
                    <input className={FormStyle.Inputs} id="glutenFree" onChange={event => handleOnCheck(event)} type="checkbox"/>
                </div>
                
                <div>
                    <label>Dairy Free</label>
                    <input className={FormStyle.Inputs} id="dairyFree" onChange={event => handleOnCheck(event)} type="checkbox"/>
                </div>

                <div>
                    <label>Very Healthy</label>
                    <input className={FormStyle.Inputs} id="veryHealthy" onChange={event => handleOnCheck(event)} type="checkbox"/>
                </div>

                <div>
                    <label>Cheap</label>
                    <input className={FormStyle.Inputs} id="cheap" onChange={event => handleOnCheck(event)} type="checkbox"/>
                </div>

                <div>
                    <label>Sustainable</label>
                    <input className={FormStyle.Inputs} id="sustainable" onChange={event => handleOnCheck(event)} type="checkbox"/>
                </div>
            </form>

            <button>Submit</button>
        </form>
    )
}

export default FormAdRecipe