import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPatients } from "../../store/actions/patientActions";
import PatientCard from "./PatientCard";

export default function PatientCardList() {
  const { patients } = useSelector((state) => state.patient);
  const patientDispatch = useDispatch();

  useEffect(() => {
    patientDispatch(getAllPatients());
  }, []);

  return (
    <Container>
      <Grid sx={{ mt: 1, padding: 1 }} container spacing={1}>
        {patients?.map((patient) => (
          <Grid spacing={1} item xs={5} md={3} lg={2}>
            <Link to={`/patient/${patient.id}`}>
              <PatientCard key={patient.id} patient={patient}></PatientCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
