import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DoctorService from "../services/DoctorService";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneDoctor } from "../store/actions/doctorActions";
import DoctorCardList from "../components/doctor/DoctorCardList";


export default function Doctor({doctors}) {


  return (
    <div>
      <DoctorCardList />
    </div>
   
  );
}
