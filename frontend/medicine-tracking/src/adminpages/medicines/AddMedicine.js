import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, Box, Stack, TextField, Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { postOneMedicine } from "../../store/actions/medicineActions";
import SimpleFab from "../../components/SimpleFab";

export default function AddMedicine() {
  const medicineDispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    medicineName: "",
    medicineType: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = () => {
    medicineDispatch(postOneMedicine(form));
    navigate("/admin/medicines/list");
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ m: 3 }}>
        <Stack spacing={3}>
          <TextField
            name="medicineName"
            label="Medicine Name"
            onChange={handleChange}
          ></TextField>

          <TextField
            name="medicineType"
            label="Medicine Type"
            onChange={handleChange}
          ></TextField>

          <Button color="primary" onClick={handleClick} variant="contained">
            Add
          </Button>
        </Stack>
        <SimpleFab url="/admin/medicines/list" />
      </Box>
    </Container>
  );
}
