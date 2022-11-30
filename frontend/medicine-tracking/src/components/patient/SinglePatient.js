import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Container, Stack } from "@mui/system";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { getOnePatient } from "../../store/actions/patientActions";
import PatientCard from "./PatientCard";
import MedicineList from "../medicine/MedicineList";

export default function SinglePatient() {
  const { patient } = useSelector((state) => state.patient);
  const patientDispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    patientDispatch(getOnePatient(params.id));
  }, []);

  console.log(patient);

  return (
    <div>

     <PatientCard patient={patient} />
      
      <MedicineList medicines={patient.patientMedicines} />
      
    </div>
  );
}
