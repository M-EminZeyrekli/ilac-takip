import axios from "axios";

class MedicineService {
  constructor() {
    this.baseUrl = "http://localhost:8080/api/medicines";
  }

  async getOneMedicine(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios
      .get(url)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async getAllMedicines() {
    const { status, data } = await axios.get(this.baseUrl).then((resp) => resp);
    return { status, data };
  }

  async postOneMedicine(body) {
    const { status, data } = await axios
      .post(this.baseUrl, body)
      .then((resp) => resp);
    return { status, data };
  }

  async putOneMedicine(id, medicine) {
    return await axios
      .put(id, medicine)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async deleteOneMedicine(id) {
    let url = `${this.baseUrl}/${id}`;
    const { status } = await axios.delete(url).then((resp) => resp);
    return { status };
  }
}
export default MedicineService;
