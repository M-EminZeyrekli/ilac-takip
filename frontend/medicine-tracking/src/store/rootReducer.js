import { combineReducers } from "redux";
import doctorReducer from "./reducers/doctorReducer";
import medicineReducer from "./reducers/medicineReducer";
import patientReducer from "./reducers/patientReducer"

const rootReducer = combineReducers({
    medicine : medicineReducer,
    doctor : doctorReducer,
    patient : patientReducer
});

export default rootReducer;