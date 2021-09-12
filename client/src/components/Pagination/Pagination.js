import React, { useState } from 'react';
//import { useDispatch, } from 'react-redux'; //useSelector en lugar de imporar el store y usar getState
import { store } from "../../redux/store";
import {} from "../../redux/actions";
import PaginationStyle from "./Pagination.module.css";
import Card from "../Card/Card";

function Pagination() {
    //const dispatch = useDispatch()
    const props = store.getState()
    const itemsPerPages = props.reducer.itemsPerPages
    const dietFilters = props.reducer.dietFilters
    
    let allRecipes = props.reducer.allRecipes

    if(dietFilters.dairyFree){
        console.log("dairyFree")
        allRecipes = allRecipes.filter(recipe => recipe.dairyFree)
    }
    if(dietFilters.glutenFree){
        console.log("glutenFree")
        allRecipes = allRecipes.filter(recipe => recipe.glutenFree)
    }
    if(dietFilters.vegan){
        console.log("vegan")
        allRecipes = allRecipes.filter(recipe => recipe.vegan)
    }
    if(dietFilters.vegetarian){
        console.log("vegetarian")
        allRecipes = allRecipes.filter(recipe => recipe.vegetarian)
    }
    if(dietFilters.veryHealthy){
        console.log("veryHealthy")
        allRecipes = allRecipes.filter(recipe => recipe.veryHealthy)
    }
    
    const totalPages = Math.ceil(allRecipes.length / itemsPerPages)
    
    const [page, setPage] = useState(0)
    let showRecipes = []
    let pagines = []
    if(allRecipes.length > 0){
        let start = 0
        let end = 9
        for(let i=0 ; i<totalPages; i++){
            pagines.push(i+1)
            showRecipes.push(allRecipes.slice(start,end))
            start = start + 9
            end = end + 9
        }
    }
    else{
        showRecipes = props.reducer.emptyRecipe
    }

    return (

        <div>

            <button
                type="button"
                onClick={()=> setPage(0)}
            > 
                Applay Filters 
            </button>

            <form className={PaginationStyle.indexBar}>
                {pagines.map(element=>(
                    <button 
                        className={PaginationStyle.buttonIndex}
                        type="button"
                        onClick={()=> setPage(element-1)}
                    >
                        {element}
                    </button>
                ))}
            </form>
            
            <div className={PaginationStyle.cardsTable}>
                {showRecipes[page].map(props=>(
                    <Card key={props.id} props={props}/>
                ))}
            </div>

        </div>
    )
}

export default Pagination
