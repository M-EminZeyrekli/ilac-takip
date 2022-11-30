import "./App.css";
import AddMedicine from "./adminpages/medicines/AddMedicine";
import AddDoctor from "./adminpages/doctors/AddDoctor";
import AddPatient from "./adminpages/patients/AddPatient";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListMedicine from "./adminpages/medicines/ListMedicine";
import Doctor from "./pages/Doctor";
import Admin from "./adminpages/Admin";
import { useState } from "react";
import ListDoctor from "./adminpages/doctors/ListDoctor";
import ListPatient from "./adminpages/patients/Listpatient";
import DoctorCard from "./components/doctor/DoctorCard";
import SingleDoctor from "./components/doctor/SingleDoctor";
import Patient from "./pages/Patient";
import SinglePatient from "./components/patient/SinglePatient";

function App() {
  const [medicines, setmedicines] = useState([]);
  const [doctors, setdoctors] = useState([]);
  const [patients, setpatients] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/admin/medicines/list"
            element={
              <ListMedicine medicines={medicines} setmedicines={setmedicines} />
            }
          />
          <Route path="/admin/medicines/add" element={<AddMedicine />} />
          <Route
            path="/admin/doctors/list"
            element={<ListDoctor doctors={doctors} setdoctors={setdoctors} />}
          />
          <Route path="/admin/doctors/add" element={<AddDoctor />} />
          <Route
            path="/admin/patients/list"
            element={
              <ListPatient patients={patients} setpatients={setpatients} />
            }
          />
          <Route path="/admin/patients/add" element={<AddPatient />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/doctor/"
            element={<Doctor doctors={doctors} setdoctors={setdoctors} />}
          />
          <Route
            path="/patient/"
            element={<Patient patients={patients} setpatients={setpatients} />}
          />
          <Route path="/doctor/:id" element={<SingleDoctor />} />
          <Route path="/patient/:id" element={<SinglePatient />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
