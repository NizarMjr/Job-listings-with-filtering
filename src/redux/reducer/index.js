import { combineReducers } from "redux";
import { reducerFetching, reducerFilter } from "./reducerAction";

const reducer = combineReducers({
    addJobFilter: reducerFilter,
    fetchJobs: reducerFetching,
})

export default reducer;