import React from "react";
import ReactApexCharts from "react-apexcharts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default function Treemap() {
  const classes = useStyles();
  let state = {
    series: [
      {
        data: [
          {
            x: "Toronto",
            y: 218,
          },
          {
            x: "Ottawa",
            y: 149,
          },
          {
            x: "Hamilton",
            y: 184,
          },
          {
            x: "Kitchener",
            y: 55,
          },
          {
            x: "Markham",
            y: 84,
          },
          {
            x: "Scarborough",
            y: 31,
          },
          {
            x: "Brampton",
            y: 70,
          },
          {
            x: "Windsor",
            y: 30,
          },
          {
            x: "Stratford",
            y: 44,
          },
          {
            x: "Port Hope",
            y: 68,
          },
          {
            x: "Vaughn",
            y: 28,
          },
          {
            x: "Mississauga",
            y: 19,
          },
          {
            x: "Ajax",
            y: 29,
          },
        ],
      },
    ],
    options: {
      legend: {
        show: false,
      },
      chart: {
        height: '350px',
        type: "treemap",
      },
    },
  };
  return (
    <Card className={classes.root}>
      <CardContent >
        <Typography variant="h6">
          <span>
            Rash Drivers Near You
          </span>
        </Typography>
        <Typography variant='caption'><span>Breakdown of where the most hazardous drivers are located in your province.</span></Typography>

        <div style={{ display: "grid", placeItems: "center", marginTop: '1rem' }}>
          <ReactApexCharts
            options={state.options}
            series={state.series}
            type="treemap"
            height={'250px'}
          />
        </div>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    width: "50%",
    height: "350px",
  },
});
