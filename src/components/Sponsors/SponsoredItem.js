import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  maxWidth: "100%",
  borderRadius: "15px",
  boxShadow: "5px 5px 5px 2px rgba(0, 0, 0, 0.5)"
};
export default function SponsoredItem() {
  return (
    <Card sx={style}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="75%"
        image="/assets/headphone.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Product Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          maxime expedita
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
