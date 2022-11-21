import { patients, patient } from "../initialValues/patientItems";
import {
  DELETE_ONE_PATIENT,
  GET_ALL_PATIENTS,
  GET_ONE_PATIENT,
  POST_ONE_PATIENT,
  PUT_ONE_PATIENT
} from "../actions/patientActions";

const initialValue = {
  patients,
  patient
};

function patientReducer(state = initialValue, { type, payload }) {
  switch (type) {
    case GET_ALL_PATIENTS:
      return {
        ...state,
        patients: payload
      };
    case DELETE_ONE_PATIENT:
      return {
        ...state,
        patients: state.patients.filter((patient) => patient.id !== payload)
      };
    case POST_ONE_PATIENT:
      return {
        ...state,
        patients: [...state.patients, payload]
      };
    case GET_ONE_PATIENT:
      return {
        ...state,
        patient: payload
      };
    case PUT_ONE_PATIENT:
      return {
        ...state,
        patients: [
          ...state.patients.filter((patient) => patient.id !== payload.id),
          payload
        ]
      };

    default:
      return {
        ...state
      };
  }
}
export default patientReducer;
