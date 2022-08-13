import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import dynamic from "next/dynamic";
import BaseCard from "../baseCard/BaseCard";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const MonthlyOverview = () => {
  const optionssalesoverview = {
    grid: {
      show: true,
      borderColor: "transparent",
      strokeDashArray: 2,
      padding: {
        left: 0,
        right: 0,
        bottom: 0,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "23%",
        endingShape: "rounded",
        borderRadius: 5,
      },
    },

    colors: ["#fb9678", "#03c9d7"],
    fill: {
      type: "solid",
      opacity: 1,
    },
    chart: {
      offsetX: -15,
      toolbar: {
        show: false,
      },
      foreColor: "#adb0bb",
      fontFamily: "'DM Sans',sans-serif",
      sparkline: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    legend: {
      show: false,
    },
    xaxis: {
      type: "category",
      categories: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    yaxis: {
      show: true,
      min: 0,
      max: 30,
      tickAmount: 3,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    stroke: {
      show: true,
      width: 1,
      lineCap: "butt",
      colors: ["transparent"],
    },
    tooltip: {
      theme: "dark",
    },
  };
  const seriessalesoverview = [
    {
      name: "FTS",
      data: [13, 2, 9, 0, 9, 6, 9],
    },
    {
      name: "Home",
      data: [8, 4, 0, 12, 9, 12, 5],
    },
  ];
  return (
    <BaseCard title="Weekly Overview">
      <Chart
        options={optionssalesoverview}
        series={seriessalesoverview}
        type="bar"
        height="295px"
      />
    </BaseCard>
  );
};

export default MonthlyOverview;
