import setError from "./set-error";
import setFilter from "./set-filter";
import clearError from "./clear-error";
import clearFilter from "./clear-filter";

const handlerHead = {
    SET_FILTER: setFilter,
    SET_ERROR: setError,
    CLEAR_ERROR: clearError,
    CLEAR_FILTER: clearFilter
}

export default handlerHead;