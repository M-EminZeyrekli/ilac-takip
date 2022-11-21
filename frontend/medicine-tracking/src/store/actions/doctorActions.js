import DoctorService from "../../services/DoctorService";

export const GET_ALL_DOCTORS = "GET_ALL_DOCTORS";
export const GET_ONE_DOCTOR = "GET_ONE_DOCTOR";
export const DELETE_ONE_DOCTOR = "DELETE_ONE_DOCTOR";
export const POST_ONE_DOCTOR = "POST_ONE_DOCTOR";
export const PUT_ONE_DOCTOR = "PUT_ONE_DOCTOR";

const doctorService = new DoctorService();

export function getAllDoctors() {
  return function (dispatch) {
    doctorService
      .getAllDoctors()
      .then((resp) => resp.data)
      .then((resp) => dispatch({ type: GET_ALL_DOCTORS, payload: resp }));
  };
}

export function getOneDoctor(id) {
  return function (dispatch) {
    doctorService
      .getOneDoctor(id)
      .then((resp) => resp.data)
      .then((resp) => dispatch({ type: GET_ONE_DOCTOR, payload: resp }));
  };
}

export function deleteOneDoctor(id) {
  return function (dispatch) {
    doctorService
      .deleteOneDoctor(id)
      .then((resp) => dispatch({ type: DELETE_ONE_DOCTOR, payload: id }));
  };
}

export function postOneDoctor(doctor) {
  return function (dispatch) {
    doctorService
      .postOneDoctor(doctor)
      .then((resp) => resp.data)
      .then((resp) => dispatch({ type: POST_ONE_DOCTOR, payload: resp }));
  };
}

export function putOneDoctor(id, doctor) {
  return function (dispatch) {
    doctorService
      .putOneDoctor(id, doctor)
      .then((resp) => resp.data)
      .then((resp) => dispatch({ type: PUT_ONE_DOCTOR, payload: resp }));
  };
}
