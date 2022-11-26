import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllDoctors } from "../../store/actions/doctorActions";
import DoctorCard from "./DoctorCard";

export default function DoctorCardList() {

  const { doctors } = useSelector((state) => state.doctor);
  const doctorDispatch = useDispatch();

  useEffect(() => {
    doctorDispatch(getAllDoctors());
  }, []);

  return (
    <div>
      <Grid sx={{ mt: 1, padding: 1 }} container spacing={1} >
        {doctors?.map((doctor) => (
          <Grid spacing={1} item xs={5} md={3} lg={2}>
            <Link to={`/doctor/${doctor.id }`}>
            <DoctorCard  key={doctor.id} doctor={doctor}></DoctorCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
