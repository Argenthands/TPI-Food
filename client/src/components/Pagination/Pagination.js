import React, { useState } from 'react';
//import { useDispatch, } from 'react-redux'; //useSelector en lugar de imporar el store y usar getState
import { store } from "../../redux/store";
import {} from "../../redux/actions";
import PaginationStyle from "./Pagination.module.css";
import Card from "../Card/Card";

function Pagination() {
    //const dispatch = useDispatch()
    const props = store.getState()
    const { itemsPerPages, dietFilters } = props.reducer
    //const itemsPerPages = props.reducer.itemsPerPages
    //const dietFilters = props.reducer.dietFilters
    let allRecipes = props.reducer.allRecipes

    console.log(allRecipes.length)
    
    const [page, setPage] = useState(0)
    let showRecipes = [] // esto es lo que le paso a las cartas como props
    let pages = [] // las paginas que maepa el la barra de paginas

    if(dietFilters.dairyFree){
        allRecipes = allRecipes.filter(recipe => recipe.dairyFree)
    }
    if(dietFilters.glutenFree){
        allRecipes = allRecipes.filter(recipe => recipe.glutenFree)
    }
    if(dietFilters.vegan){
        allRecipes = allRecipes.filter(recipe => recipe.vegan)
    }
    if(dietFilters.vegetarian){
        allRecipes = allRecipes.filter(recipe => recipe.vegetarian)
    }
    if(dietFilters.veryHealthy){
        allRecipes = allRecipes.filter(recipe => recipe.veryHealthy)
    }

    let totalPages = Math.ceil(allRecipes.length / itemsPerPages)
    
    if(allRecipes.length > 0){
        let start = 0
        let end = 9
        for(let i=0 ; i<totalPages; i++){
            pages.push(i+1)
            showRecipes.push(allRecipes.slice(start,end))
            start = start + 9
            end = end + 9
        }
    }
    else{
        showRecipes = props.reducer.emptyRecipe
    }
    const [render, setRender]=useState(true) // <----- Render

    return (

        <div>

            <button
                type="button"
                onClick={()=> {
                    setRender(!render)
                    setPage(0)
                }}
            > 
                Apply Filters 
            </button>

            <div className={PaginationStyle.indexBar}>
                {pages.map(element=>(
                    <button 
                        className={PaginationStyle.buttonIndex}
                        key={element}
                        type="button"
                        onClick={()=> {
                            setPage(element-1)
                        }}
                    >
                        {element}
                    </button>
                ))}
            </div>
            
            <div className={PaginationStyle.cardsTable}>
                {showRecipes[page].map(props=>(
                    <Card key={props.id} props={props}/>
                ))}
            </div>

        </div>
    )
}

export default Pagination
