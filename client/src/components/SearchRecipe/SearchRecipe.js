import React from 'react'
import SearchRecipeStyle from "./SearchRecipe.module.css";

const SearchRecipe = () => {
    return (
        <div className={SearchRecipeStyle.mapa}>
            <form className={SearchRecipeStyle.Body}>
                <input 
                    className={SearchRecipeStyle.Inputs} 
                    type="text" 
                    placeholder="title"
                />
                <input 
                    className={SearchRecipeStyle.Inputs} 
                    type="text" 
                    placeholder="title"
                />
            </form>
            <button>Submit</button>
        </div>
    )
}

export default SearchRecipe
