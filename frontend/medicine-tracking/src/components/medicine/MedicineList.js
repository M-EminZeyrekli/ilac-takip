import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox } from "@mui/material";


const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function MedicineList({ medicines }) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Monday</TableCell>
            <TableCell>Tuesday</TableCell>
            <TableCell>Wednesday</TableCell>
            <TableCell>Thursday</TableCell>
            <TableCell>Friday</TableCell>
            <TableCell>Saturday</TableCell>
            <TableCell>Sunday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {medicines.map((medicine) => (
            <TableRow
              key={medicine.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {medicine.name} <Checkbox {...label} />
              </TableCell>
              <TableCell component="th" scope="row">
                {medicine.name} <Checkbox {...label} />
              </TableCell>
              <TableCell component="th" scope="row">
                {medicine.name} <Checkbox {...label} />
              </TableCell>
              <TableCell component="th" scope="row">
                {medicine.name} <Checkbox {...label} />
              </TableCell>
              <TableCell component="th" scope="row">
                {medicine.name} <Checkbox {...label} />
              </TableCell>
              <TableCell component="th" scope="row">
                {medicine.name} <Checkbox {...label} />
              </TableCell>
              <TableCell component="th" scope="row">
                {medicine.name} <Checkbox {...label} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
