import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";


export default function PatientCard({ patient }) {

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={`/images/${patient.id % 120}.jpg`}
          alt="patient"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {patient.firstName} {patient.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {patient.age}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {patient.height} cm
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {patient.weight} kg
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
