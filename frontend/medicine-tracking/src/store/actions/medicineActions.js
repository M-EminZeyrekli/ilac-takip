import MedicineService from "../../services/MedicineService";

export const GET_ALL_MEDICINES = "GET_ALL_MEDICINES";
export const GET_ONE_MEDICINE = "GET_ONE_MEDICINE";
export const DELETE_ONE_MEDICINE = "DELETE_ONE_MEDICINE";
export const POST_ONE_MEDICINE = "POST_ONE_MEDICINE";
export const PUT_ONE_MEDICINE = "PUT_ONE_MEDICINE";

const medicineService = new MedicineService();

export function getAllMedicines() {
  return function (dispatch) {
    medicineService
      .getAllMedicines()
      .then((resp) => resp.data)
      .then((resp) => dispatch({ type: GET_ALL_MEDICINES, payload: resp }));
  };
}

export function getOneMedicine(id) {
  return function (dispatch) {
    medicineService
      .getOneMedicine(id)
      .then((resp) => resp.data)
      .then((resp) => dispatch({ type: GET_ONE_MEDICINE, payload: resp }));
  };
}

export function deleteOneMedicine(id) {
  return function (dispatch) {
    medicineService
      .deleteOneMedicine(id)
      .then((resp) => dispatch({ type: DELETE_ONE_MEDICINE, payload: id }));
  };
}

export function postOneMedicine(medicine) {
  return function (dispatch) {
    medicineService
      .postOneMedicine(medicine)
      .then((resp) => resp.data)
      .then((resp) => dispatch({ type: POST_ONE_MEDICINE, payload: resp }));
  };
}

export function putOneMedicine(id, medicine) {
  return function (dispatch) {
    medicineService
      .putOneMedicine(id, medicine)
      .then((resp) => resp.data)
      .then((resp) => dispatch({ type: PUT_ONE_MEDICINE, payload: resp }));
  };
}
