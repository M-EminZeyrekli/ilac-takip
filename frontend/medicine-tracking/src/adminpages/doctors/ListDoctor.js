import {
  Button,
  ButtonGroup,
  emphasize,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Paper from "@mui/material/Paper";
import { Stack } from "@mui/system";
import DoctorService from "../../services/DoctorService";
import SimpleFab from "../../components/SimpleFab";

export default function ListDoctor({ doctors, setdoctors }) {
  const doctorService = new DoctorService();
  useEffect(() => {
    doctorService.getAllDoctors().then((resp) => setdoctors(resp.data));
  }, []);

  const handleRemove = (id) => {
    console.log(id);
    doctorService.deleteOneDoctor(id);
    let afterRemove = doctors.filter((doctor) => doctor.id !== id);
    setdoctors(afterRemove);
  };

  return (
    <>
      <Stack>
        <TableContainer sx={{ m: 1, p: 1 }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">ID</TableCell>
                <TableCell></TableCell>
                <TableCell align="left">First name</TableCell>
                <TableCell align="left">Last name</TableCell>
                <TableCell align="left">Department</TableCell>
                <TableCell align="left">Degree</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {doctors.map((doctor) => (
                <TableRow
                  key={doctor.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{doctor.id}</TableCell>
                  <TableCell>
                    <Avatar
                      src={`/images/${doctor.id}.jpg`}
                      alt={`${doctor.firstName} ${doctor.lastName}`}
                    >
                      <ImageIcon />
                    </Avatar>
                  </TableCell>
                  <TableCell align="left">{doctor.firstName}</TableCell>
                  <TableCell align="left">{doctor.lastName}</TableCell>
                  <TableCell align="left">{doctor.department}</TableCell>
                  <TableCell align="left">{doctor.degree}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup orientation="vertical">
                      <Button>Edit</Button>
                      <Button onClick={() => handleRemove(doctor.id)}>
                        Remove
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <SimpleFab url="/admin/doctors/add" />
      </Stack>
    </>
  );
}
