import React from "react";
import SponsoredItem from "./SponsoredItem";
import Grid from "@mui/material/Grid";

function Sponsors() {
  return (
    <div className="px-4 py-3 bg-dark">
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        {Array.from(Array(9)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
          <SponsoredItem />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Sponsors;
