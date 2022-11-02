import axios from "axios";

class PatientService {
  constructor() {
    this.baseUrl = "http://localhost:8080/api/patients";
  }

  async getOnePatient(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios
      .get(url)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async getAllPatients() {
    const { status, data } = await axios.get(this.baseUrl).then((resp) => resp);
    return { status, data };
  }

  async postOnePatient(body) {
    const { status, data } = await axios
      .post(this.baseUrl, body)
      .then((resp) => resp);
    return { status, data };
  }

  async putOnePatient(id, patient) {
    return await axios
      .put(id, patient)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async deleteOnePatient(id) {
    let url = `${this.baseUrl}/${id}`;
    const { status } = await axios.delete(url).then((resp) => resp);
    return { status };
  }
}
export default PatientService;
