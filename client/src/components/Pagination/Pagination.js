import React, { useState } from 'react';
import { useDispatch, } from 'react-redux'; //useSelector en lugar de imporar el store y usar getState
import { store } from "../../redux/store";
import {} from "../../redux/actions";
import PaginationStyel from "./Pagination.module.css";
import Card from "../Card/Card";

function Pagination() {
    const dispatch = useDispatch()
    const props = store.getState()
    const itemsPerPages = props.reducer.itemsPerPages
    const [page, setPage] = useState(1)
    
    
    const allRecipesDb = props.reducer.recipesDb
    const allRecipesWeb = props.reducer.recipesWeb
    const allRecipes = allRecipesDb.concat(allRecipesWeb)
    const totalPages = Math.ceil(allRecipes.length / itemsPerPages)
    
    let showRecipes = []
    let pagines = []
    let start = 0
    let end = 9
    for(let i=0 ; i<totalPages; i++){
        pagines.push(i+1)
        showRecipes.push(allRecipes.slice(start,end))
        start = start + 9
        end = end + 9
    }
        return (
        <div>
            <nav className={PaginationStyel.indexBar}>
                <ul>
                    {pagines.map(element=>(
                        <li key={element}>{element}</li>
                    ))}
                </ul>
            </nav>
            
            <div>
                {allRecipes.map(props=>(
                    <Card key={props.id} props={props}/>
                ))}
            </div>

            <nav className={PaginationStyel.indexBar}>
                <ul>
                    {pagines.map(element=>(
                        <li key={element}>{element}</li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
