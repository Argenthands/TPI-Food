import React, { useState } from 'react'//, useEffect

import { useDispatch } from "react-redux"
import { store } from "../../redux/store";
import "./FilterBar.css";
import { changeDietFilter, } from "../../redux/actions";

const FilterBar = () => {

    const props = store.getState();
    const dietFilters = props.reducer.dietFilters

    const [data, setData] = useState({
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        veryHealthy: false,
    });

    const dispatch = useDispatch()
    const handleOnCheck = event =>{
        let newData = { ...data }
        newData [event.target.id] = event.target.checked
        setData(newData)
        dispatch(changeDietFilter(newData))
        //dispatch(applyFilter())
    }

    return (
        <div className='FilterBar'>
            <div className='LetsCook'>Lets Cook!</div>
            <form className='checkForm'>
                <div>
                    <label id="vegetarian">Vegetarian</label>
                    <input 
                        id="vegetarian" 
                        onChange={event => handleOnCheck(event)} 
                        type="checkbox"
                        checked={dietFilters.vegetarian}
                    />
                </div>

                <div>
                    <label id="vegan" >Vegan</label>
                    <input 
                        id="vegan" 
                        onChange={event => handleOnCheck(event)} 
                        type="checkbox"
                        checked={dietFilters.vegan}
                    />
                </div>

                <div>
                    <label id="glutenFree" >Gluten Free</label>
                    <input 
                        id="glutenFree" 
                        onChange={event => handleOnCheck(event)} 
                        type="checkbox"
                        checked={dietFilters.glutenFree}
                    />
                </div>
                
                <div>
                    <label id="dairyFree" >Dairy Free</label>
                    <input 
                        id="dairyFree" 
                        onChange={event => handleOnCheck(event)} 
                        type="checkbox"
                        checked={dietFilters.dairyFree}
                    />
                </div>

                <div>
                    <label id="veryHealthy" >Very Healthy</label>
                    <input 
                        id="veryHealthy" 
                        onChange={event => handleOnCheck(event)} 
                        type="checkbox"
                        checked={dietFilters.veryHealthy}
                    />
                </div>

            </form>

        </div>
    )
}

export default FilterBar
