import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, Box, Stack, TextField, Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import SimpleFab from "../../components/SimpleFab";
import { postOneDoctor } from "../../store/actions/doctorActions";
import { postOnePatient } from "../../store/actions/patientActions";

export default function AddPatient() {
  const patientDispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: "",
    height: "",
    weight: "",
    phoneNumber: "",
    gender: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = () => {
    patientDispatch(postOnePatient(form));
    navigate("/admin/patients/list");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ m: 3 }}>
        <Stack spacing={3}>
          <TextField
            name="firstName"
            label="First Name"
            onChange={handleChange}
          ></TextField>

          <TextField
            name="lastName"
            label="Last Name"
            onChange={handleChange}
          ></TextField>

          <TextField
            name="height"
            label="Height"
            onChange={handleChange}
          ></TextField>

          <TextField
            name="weight"
            label="Weight"
            onChange={handleChange}
          ></TextField>

          <TextField
            name="phoneNumber"
            label="Phone Number"
            onChange={handleChange}
          ></TextField>
          <TextField name="age" label="Age" onChange={handleChange}></TextField>
          <TextField
            name="gender"
            label="Gender"
            onChange={handleChange}
          ></TextField>
          <Button color="primary" onClick={handleClick} variant="contained">
            Add
          </Button>
        </Stack>
        <SimpleFab url="/admin/patients/list" />
      </Box>
    </Container>
  );
}
