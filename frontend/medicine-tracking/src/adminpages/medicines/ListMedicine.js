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
import MedicineService from "../../services/MedicineService";
import SimpleFab from "../../components/SimpleFab";

export default function ListMedicine({ medicines, setmedicines }) {
  const medicineService = new MedicineService();
  useEffect(() => {
    medicineService.getAllMedicines().then((resp) => setmedicines(resp.data));
  }, []);

  const handleRemove = (id) => {
    console.log(id);
    medicineService.deleteOneMedicine(id);
    let afterRemove = medicines.filter((medicine) => medicine.id !== id);
    setmedicines(afterRemove);
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
                <TableCell align="left">Medicine name</TableCell>
                <TableCell align="left">Medicine type</TableCell>
                <TableCell align="center"> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {medicines.map((medicine) => (
                <TableRow
                  key={medicine.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{medicine.id}</TableCell>
                  <TableCell>
                    <Avatar
                    src={`/medicines/${medicine.id}.jpg`}
                    alt={`${medicine.firstName} ${medicine.lastName}`}
                    >
                      <ImageIcon />
                    </Avatar>
                  </TableCell>
                  <TableCell align="left">{medicine.name}</TableCell>
                  <TableCell align="left">{medicine.medicineType}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup orientation="vertical">
                      <Button>Edit</Button>
                      <Button onClick={() => handleRemove(medicine.id)}>
                        Remove
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <SimpleFab url="/admin/medicines/add" />
      </Stack>
    </>
  );
}
