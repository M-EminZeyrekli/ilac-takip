import { medicines, medicine } from "../initialValues/medicineItems";
import {
  DELETE_ONE_MEDICINE,
  GET_ALL_MEDICINES,
  GET_ONE_MEDICINE,
  POST_ONE_MEDICINE,
  PUT_ONE_MEDICINE
} from "../actions/medicineActions";

const initialValue = {
  medicines,
  medicine
};

function medicineReducer(state = initialValue, { type, payload }) {
  switch (type) {
    case GET_ALL_MEDICINES:
      return {
        ...state,
        medicines: payload
      };
    case DELETE_ONE_MEDICINE:
      return {
        ...state,
        categories: state.categories.filter(
          (medicine) => medicine.id !== payload
        )
      };
    case POST_ONE_MEDICINE:
      return {
        ...state,
        medicines: [...state.medicines, payload]
      };
    case GET_ONE_MEDICINE:
      return {
        ...state,
        medicine: payload
      };
    case PUT_ONE_MEDICINE:
      return {
        ...state,
        categories: [
          ...state.medicines.filter((medicine) => medicine.id !== payload.id),
          payload
        ]
      };

    default:
      return {
        ...state
      };
  }
}
export default medicineReducer;
