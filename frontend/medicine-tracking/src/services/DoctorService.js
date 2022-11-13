import axios from "axios";

class DoctorService {
  constructor() {
    this.baseUrl = "http://localhost:8080/api/doctors";
  }

  async getOneDoctor(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios
      .get(url)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async getAllDoctors() {
    const { status, data } = await axios.get(this.baseUrl).then((resp) => resp);
    return { status, data };
  }

  async postOneDoctor(body) {
    const { status, data } = await axios
      .post(this.baseUrl, body)
      .then((resp) => resp);
    return { status, data };
  }

  async putOneDoctor(id, medicine) {
    return await axios
      .put(id, medicine)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async deleteOneDoctor(id) {
    let url = `${this.baseUrl}/${id}`;
    const { status } = await axios.delete(url).then((resp) => resp);
    return { status };
  }
}
export default DoctorService;

