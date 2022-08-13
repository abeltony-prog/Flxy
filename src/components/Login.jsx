import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button,
} from "@mui/material";
import BaseCard from "./baseCard/BaseCard";

const products = [
  {
    Type: "EHR",
    region: "AMS",
    priority: "Low",
    pbg: "primary.main",
    No: "2",
  },
  {
    Type: "HHO",
    region: "EMEA",
    priority: "High",
    pbg: "info.main",
    No: "3",
  },
  {
    Type: "FTS",
    region: "APJ",
    priority: "Critical",
    pbg: "danger.main",
    No: "1",
  },
];

const CaseStatus = () => {
  return (
<button>Sign out</button>

  );
};

export default CaseStatus;
