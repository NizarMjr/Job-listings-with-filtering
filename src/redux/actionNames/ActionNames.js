import { TypesName } from "../types/TypesName"
export const AddFilter = (job) => {
    return {
        type: TypesName.FILTERJOB,
        payload: job,
    }
}
export const removeFilter = (job) => {
    return {
        type: TypesName.REMOVEJOB,
        payload: job,
    }
}
export const clearFilter = () => {
    return {
        type: TypesName.CLEARJOBS,
    }
}
export const fetching = (jobs) => {
    return {
        type: TypesName.FETCHJOBS,
        payload: jobs,
    }
}
