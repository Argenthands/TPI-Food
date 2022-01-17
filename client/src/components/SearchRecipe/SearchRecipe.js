import React from 'react'
//import { useDispatch } from 'react-redux';
//import { searchRecipeFromApiWeb } from "../../redux/actions";
import SearchRecipeStyle from "./SearchRecipe.module.css";

const SearchRecipe = () => {

    //const dispatch = useDispatch()

    return (
        <div className={SearchRecipeStyle.mapa}>
            <form className={SearchRecipeStyle.Body}>
                <input 
                    className={SearchRecipeStyle.Inputs} 
                    type="number" 
                    placeholder="Id"
                />
            </form>
            <button>Submit</button>
        </div>
    )
}

export default SearchRecipe
