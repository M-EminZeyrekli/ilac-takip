import { Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MedicineList from "../components/medicine/MedicineList";
import PatientCardList from "../components/patient/PatientCardList";
import { getAllPatients } from "../store/actions/patientActions";

export default function Patient() {
  const { patients } = useSelector((state) => state.patient);
  const patientDispatch = useDispatch();

  useEffect(() => {
    patientDispatch(getAllPatients());
  }, []);

  console.log(patients);
  return (
    <div>
      <Typography alignSelf={"center"}>
        <PatientCardList />
      </Typography>
    </div>
  );
}
