import "./App.css";
import AddMedicine from "./adminpages/medicines/AddMedicine";
import AddDoctor from "./adminpages/doctors/ListDoctor"
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListMedicine from "./adminpages/medicines/ListMedicine";
import Doctor from "./pages/Doctor";
import Admin from "./adminpages/Admin";
import { useState } from "react";

function App() {
  const [medicines, setmedicines] = useState([]);
  const [doctors, setdoctors] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin/medicines/list" element={<ListMedicine medicines={medicines} setmedicines={setmedicines}/>} />
          <Route path="/admin/medicines/add" element={<AddMedicine />} />
          <Route path="/admin/doctors/list" element={<AddDoctor doctors={doctors} setdoctors={setdoctors} />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/doctor/" element={<Doctor />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
