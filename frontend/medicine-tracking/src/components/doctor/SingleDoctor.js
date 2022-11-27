import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneDoctor } from "../../store/actions/doctorActions";
import DoctorService from "../../services/DoctorService";
import DoctorCard from "./DoctorCard";
import { useParams } from "react-router-dom";
import PatientSelect from "../PatientSelect";
import { Box, Container, Stack } from "@mui/system";
import { Button, ButtonGroup, Typography } from "@mui/material";

export default function SingleDoctor() {
  const { doctor } = useSelector((state) => state.doctor);
  const doctorDispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    doctorDispatch(getOneDoctor(params.id));
  }, []);

  console.log(doctor);

  return (
    <Container maxWidth="md">
      <Box  sx={{ m: 3 }}>
        <Stack spacing={8}>
          <Typography alignSelf={"center"}>
            <Box padding={4} sx={{ m: 2 }}>
              <DoctorCard doctor={doctor} />
            </Box>
            <ButtonGroup sx={{ m: 1 }}>
              <Button variant="outlined" color="primary">
                Add Patient
              </Button>
              <PatientSelect label={"Add Medicine "} />
              <PatientSelect label={"Medicine Tracking "} />
            </ButtonGroup>
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}
