import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFilter, removeFilter } from "../../redux/actionNames/ActionNames";
import './filterpart.css'
const FilterPart = () => {
    const filterList = useSelector(state => state.addJobFilter);
    const dispatch = useDispatch();

    const removeJobFilter = (job) => {
        dispatch(removeFilter(job))
    }
    const clear = () => {
        dispatch(clearFilter());
    }
    return (
        <div className="filter-part">
            <div className="filter-list">{filterList.map((jobFilter, index) => {
                return (
                    <div className="job-filter" key={index}>
                        <span className="job">{jobFilter}</span>
                        <span className="close" onClick={() => removeJobFilter(jobFilter)}>x</span>
                    </div>
                )
            })}</div>
            <span className="clear" onClick={() => clear()}>Clear</span>
        </div>
    )
}
export default FilterPart;