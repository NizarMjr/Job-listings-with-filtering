import { TypesName } from "../types/TypesName";
const jobsFilter = [];
const fetch = [];

export const reducerFilter = (state = jobsFilter, { type, payload }) => {
    switch (type) {
        case TypesName.FILTERJOB:
            for (let i = 0; i < state.length; i++) {
                if (payload === state[i]) return state;
            }
            return [...state, payload];
        case TypesName.REMOVEJOB:
            return state.filter((job) => {
                return job !== payload;
            })
        case TypesName.CLEARJOBS:
            state = [];
            return state;
        default:
            return state;
    }
}
export const reducerFetching = (state = fetch, { type, payload }) => {
    switch (type) {
        case TypesName.FETCHJOBS: {
            state = [];
            state = JSON.parse(JSON.stringify(payload));
            return state;
        }

        default:
            return state;
    }
}
