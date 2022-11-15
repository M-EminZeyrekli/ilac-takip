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
import PatientService from "../../services/PatientService";
import SimpleFab from "../../components/SimpleFab";

export default function ListPatient({ patients, setpatients }) {
  const patientService = new PatientService();
  useEffect(() => {
    patientService.getAllPatients().then((resp) => setpatients(resp.data));
  }, []);

  const handleRemove = (id) => {
    console.log(id);
    patientService.deleteOnePatient(id);
    let afterRemove = patients.filter((patient) => patient.id !== id);
    setpatients(afterRemove);
  };

  return (
    <>
      <Stack>
        <TableContainer sx={{ m: 1, p: 1 }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">ID</TableCell>
                <TableCell> </TableCell>
                <TableCell align="left">First name</TableCell>
                <TableCell align="left">Last name</TableCell>
                <TableCell align="left">Age</TableCell>
                <TableCell align="left">Weight</TableCell>
                <TableCell align="left">Height</TableCell>
                <TableCell align="left">Phone number</TableCell>
                <TableCell align="left">Gender</TableCell>
                <TableCell align="center"> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patients.map((patient) => (
                <TableRow
                  key={patient.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{patient.id}</TableCell>
                  <TableCell>
                    <Avatar
                      src={`/images/${patient.id }.jpg`}
                      alt={`${patient.firstName} ${patient.lastName}`}
                    >
                      <ImageIcon />
                    </Avatar>
                  </TableCell>
                  <TableCell align="left">{patient.firstName}</TableCell>
                  <TableCell align="left">{patient.lastName}</TableCell>
                  <TableCell align="left">{patient.age}</TableCell>
                  <TableCell align="left">{patient.weight}</TableCell>
                  <TableCell align="left">{patient.height}</TableCell>
                  <TableCell align="left">{patient.phoneNumber}</TableCell>
                  <TableCell align="left">{patient.gender}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup orientation="vertical">
                      <Button>Edit</Button>
                      <Button onClick={() => handleRemove(patient.id)}>
                        Remove
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <SimpleFab url="/admin/patients/add" />
      </Stack>
    </>
  );
}
