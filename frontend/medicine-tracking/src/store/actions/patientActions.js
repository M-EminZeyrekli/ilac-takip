import PatientService from "../../services/PatientService";

export const GET_ALL_PATIENTS = "GET_ALL_PATIENTS";
export const GET_ONE_PATIENT = "GET_ONE_PATIENT";
export const DELETE_ONE_PATIENT = "DELETE_ONE_PATIENT";
export const POST_ONE_PATIENT = "POST_ONE_PATIENT";
export const PUT_ONE_PATIENT = "PUT_ONE_PATIENT";

const patientService = new PatientService();

export function getAllPatients() {
  return function (dispatch) {
    patientService
      .getAllPatients()
      .then((resp) => resp.data)
      .then((resp) => dispatch({ type: GET_ALL_PATIENTS, payload: resp }));
  };
}

export function getOnePatient(id) {
  return function (dispatch) {
    patientService
      .getOnePatient(id)
      .then((resp) => resp.data)
      .then((resp) => dispatch({ type: GET_ONE_PATIENT, payload: resp }));
  };
}

export function deleteOnePatient(id) {
  return function (dispatch) {
    patientService
      .deleteOnePatient(id)
      .then((resp) => dispatch({ type: DELETE_ONE_PATIENT, payload: id }));
  };
}

export function postOnePatient(patient) {
  return function (dispatch) {
    patientService
      .postOnePatient(patient)
      .then((resp) => resp.data)
      .then((resp) => dispatch({ type: POST_ONE_PATIENT, payload: resp }));
  };
}

export function putOnePatient(id, patient) {
  return function (dispatch) {
    patientService
      .putOnePatient(id, patient)
      .then((resp) => resp.data)
      .then((resp) => dispatch({ type: PUT_ONE_PATIENT, payload: resp }));
  };
}
