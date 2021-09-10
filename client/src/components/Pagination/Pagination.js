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
    
    
    const allRecipesWeb = props.reducer.recipesWeb
    const allRecipesDb = props.reducer.recipesDb
    const allRecipes = allRecipesWeb.concat(allRecipesDb)
    const totalPages = Math.ceil(allRecipes.length / itemsPerPages)
    
    var tipo = typeof(totalPages)

    return (
        <div>
            <div>
                {`${totalPages} es ${tipo}`}

            </div>
            <div>
                {}
            </div>
            <div>
                {allRecipes.map((props)=>(
                    <Card key={props.id} props={props}/>
                ))}
            </div>
        </div>
    )
}

export default Pagination
