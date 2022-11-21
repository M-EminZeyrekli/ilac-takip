import { doctors, doctor } from "../initialValues/doctorItems";
import {
  DELETE_ONE_DOCTOR,
  GET_ALL_DOCTORS,
  GET_ONE_DOCTOR,
  POST_ONE_DOCTOR,
  PUT_ONE_DOCTOR
} from "../actions/doctorActions";

const initialValue = {
  doctors,
  doctor
};

function doctorReducer(state = initialValue, { type, payload }) {
  switch (type) {
    case GET_ALL_DOCTORS:
      return {
        ...state,
        doctors: payload
      };
    case DELETE_ONE_DOCTOR:
      return {
        ...state,
        doctors: state.doctors.filter((doctor) => doctor.id !== payload)
      };
    case POST_ONE_DOCTOR:
      return {
        ...state,
        doctors: [...state.doctors, payload]
      };
    case GET_ONE_DOCTOR:
      return {
        ...state,
        doctor: payload
      };
    case PUT_ONE_DOCTOR:
      return {
        ...state,
        doctors: [
          ...state.doctors.filter((doctor) => doctor.id !== payload.id),
          payload
        ]
      };

    default:
      return {
        ...state
      };
  }
}
export default doctorReducer;
