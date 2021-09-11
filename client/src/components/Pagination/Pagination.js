import React, { useState } from 'react';
import { useDispatch, } from 'react-redux'; //useSelector en lugar de imporar el store y usar getState
import { store } from "../../redux/store";
import {} from "../../redux/actions";
import PaginationStyle from "./Pagination.module.css";
import Card from "../Card/Card";

function Pagination() {
    const dispatch = useDispatch()
    const props = store.getState()
    const itemsPerPages = props.reducer.itemsPerPages
    const currentPge = props.reducer.currentPage
    const [page, setPage] = useState(0)
    
    const allRecipesDb = props.reducer.recipesDb
    const allRecipesWeb = props.reducer.recipesWeb
    const allRecipes = allRecipesDb.concat(allRecipesWeb)
    const totalPages = Math.ceil(allRecipes.length / itemsPerPages)
    
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

    return (
        <div>
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
