import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import PatientSelect from "../PatientSelect";
import { Box, Stack } from "@mui/system";
import { Route, useNavigate } from "react-router-dom";

export default function DoctorCard({ doctor }) {
  // const navigate = useNavigate();
  // const handleclick = () => {
  //   navigate("/doctor/" + doctor.id);
  // };
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={`/images/${doctor.id % 120}.jpg`}
          alt="doctor"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dr. {doctor.firstName} {doctor.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {doctor.degree}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {doctor.department}
          </Typography>

          <Box padding={2}>
            <Stack spacing={2}>
              <Button variant="outlined" color="primary">
                Add Patient
              </Button>
              <PatientSelect label={"Add Medicine "} />
              <PatientSelect label={"Medicine Tracking "} />
            </Stack>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
