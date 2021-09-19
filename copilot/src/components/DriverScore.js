import React from "react";
import ReactApexCharts from 'react-apexcharts';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";


export default function DriverScore() {

    const classes = useStyles();
  let state = {
    series: [
      {
        name: "Your Score",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Average Driver Score",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2021-01-19T00:00:00.000Z",
          "2021-02-19T01:30:00.000Z",
          "2021-03-19T02:30:00.000Z",
          "2021-04-19T03:30:00.000Z",
          "2021-05-19T04:30:00.000Z",
          "2021-06-19T05:30:00.000Z",
          "2021-07-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };

  return (
    <Card className={classes.root}>
        <CardContent>
        <Typography variant='h6'><span>You vs Average Driver Score</span></Typography>
        <Typography variant='caption'><span>Compare yourself to the average Ontarian driver.</span></Typography>
            <div style={{display: 'grid', placeItems: 'center'}}>
      <ReactApexCharts
        options={state.options}
        series={state.series}
        type="area"
        height={'220px'}
      />
      </div>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
    root: {
        width: '55%',
        height: '300px',
    }
  });
