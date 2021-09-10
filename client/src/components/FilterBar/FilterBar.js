import React, { useState, useEffect } from 'react'

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
        cheap: false,
        sustainable: false,
    });

    const dispatch = useDispatch()
    const handleOnCheck = event =>{
        const newData = { ...data }
        newData [event.target.id] = event.target.checked
        setData(newData)
        dispatch(changeDietFilter(newData))
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
                    type="checkbox" />
                </div>

                <div>
                    <label>Vegan</label>
                    <input 
                    className={FilterBarStyle.Inputs} 
                    id="vegan" 
                    onChange={event => handleOnCheck(event)} 
                    type="checkbox"/>
                </div>

                <div>
                    <label>Gluten Free</label>
                    <input 
                    className={FilterBarStyle.Inputs} 
                    id="glutenFree" 
                    onChange={event => handleOnCheck(event)} 
                    type="checkbox"/>
                </div>
                
                <div>
                    <label>Dairy Free</label>
                    <input 
                    className={FilterBarStyle.Inputs} 
                    id="dairyFree" 
                    onChange={event => handleOnCheck(event)} 
                    type="checkbox"/>
                </div>

                <div>
                    <label>Very Healthy</label>
                    <input 
                    className={FilterBarStyle.Inputs} 
                    id="veryHealthy" 
                    onChange={event => handleOnCheck(event)} 
                    type="checkbox"/>
                </div>

                <div>
                    <label>Cheap</label>
                    <input 
                    className={FilterBarStyle.Inputs} 
                    id="cheap" 
                    onChange={event => handleOnCheck(event)} 
                    type="checkbox"/>
                </div>

                <div>
                    <label>Sustainable</label>
                    <input 
                    className={FilterBarStyle.Inputs} 
                    id="sustainable" 
                    onChange={event => handleOnCheck(event)} 
                    type="checkbox"/>
                </div>
            </form>

        </div>
    )
}

export default FilterBar
