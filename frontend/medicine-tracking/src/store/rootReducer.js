import { combineReducers } from "redux";
import medicineReducer from "./reducers/medicineReducer";

const rootReducer = combineReducers({
    medicine : medicineReducer
});

export default rootReducer;