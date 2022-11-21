import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, Box, Stack, TextField, Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import SimpleFab from "../../components/SimpleFab";
import { postOneDoctor } from "../../store/actions/doctorActions";

export default function AddDoctor() {
  const doctorDispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    department: "",
    degree: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = () => {
    doctorDispatch(postOneDoctor(form));
    navigate("/admin/doctors/list");
  };

  return (
    <Container maxWidth="md">
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
            name="department"
            label="Department"
            onChange={handleChange}
          ></TextField>
          
          <TextField
            name="degree"
            label="Degree"
            onChange={handleChange}
          ></TextField>

          <Button color="primary" onClick={handleClick} variant="contained">
            Add
          </Button>
        </Stack>
        <SimpleFab url="/admin/doctors/list" />
      </Box>
    </Container>
  );
}
