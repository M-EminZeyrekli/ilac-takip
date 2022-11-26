import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneDoctor } from "../../store/actions/doctorActions";
import DoctorService from "../../services/DoctorService";
import DoctorCard from "./DoctorCard";
import { useParams } from "react-router-dom";

export default function SingleDoctor() {
  const { doctor } = useSelector((state) => state.doctor);
  const doctorDispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    doctorDispatch(getOneDoctor(params.id));
  }, []);

  console.log(doctor);

  return <div>
    <DoctorCard doctor={doctor} />
  </div>;
}
