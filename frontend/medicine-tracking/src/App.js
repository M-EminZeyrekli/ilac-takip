import "./App.css";
import AddMedicine from "./adminpages/medicines/AddMedicine";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListMedicine from "./adminpages/medicines/ListMedicine";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin/medicines/list" element={<ListMedicine />} />
          <Route path="/admin/medicines/add" element={<AddMedicine />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
