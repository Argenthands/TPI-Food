import React, { useState } from 'react'//, useEffect

import { useDispatch } from "react-redux"
import { store } from "../../redux/store";
import FilterBarStyle from "./FilterBar.module.css";
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
        const newData = { ...data }
        newData [event.target.id] = event.target.checked
        setData(newData)
        dispatch(changeDietFilter(newData))
        //dispatch(applyFilter())
    }

    return (
        <div className={FilterBarStyle.FilterBar}>
            <form className={FilterBarStyle.chekForm}>
                <div>
                    <label>Vegetarian</label>
                    <input 
                        className={FilterBarStyle.Inputs} 
                        id="vegetarian" 
                        onChange={event => handleOnCheck(event)} 
                        type="checkbox"
                        checked={dietFilters.vegetarian}
                    />
                </div>

                <div>
                    <label>Vegan</label>
                    <input 
                        className={FilterBarStyle.Inputs} 
                        id="vegan" 
                        onChange={event => handleOnCheck(event)} 
                        type="checkbox"
                        checked={dietFilters.vegan}
                    />
                </div>

                <div>
                    <label>Gluten Free</label>
                    <input 
                        className={FilterBarStyle.Inputs} 
                        id="glutenFree" 
                        onChange={event => handleOnCheck(event)} 
                        type="checkbox"
                        checked={dietFilters.glutenFree}
                    />
                </div>
                
                <div>
                    <label>Dairy Free</label>
                    <input 
                        className={FilterBarStyle.Inputs} 
                        id="dairyFree" 
                        onChange={event => handleOnCheck(event)} 
                        type="checkbox"
                        checked={dietFilters.dairyFree}
                    />
                </div>

                <div>
                    <label>Very Healthy</label>
                    <input 
                        className={FilterBarStyle.Inputs} 
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
