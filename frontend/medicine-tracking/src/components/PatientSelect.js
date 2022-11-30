import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPatients } from "../store/actions/patientActions";
import { useNavigate } from "react-router-dom";

export default function PatientSelect({label}) {
  const { patients } = useSelector((state) => state.patient);
  const patientDispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    patientDispatch(getAllPatients());
  }, []);


  const handleChange = (event) => {
    
  };
  const handleClick = () => {
    //navigate("/admin/medicines");
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={patients}
          label="Patient"
          onChange={handleChange}
        >
            {patients.map((patient)=>(
                 <MenuItem  onClick={handleClick()}>{patient.firstName} {patient.lastName}</MenuItem>
               
            ))}
         
        </Select>
      </FormControl>
    </Box>
  );
}
