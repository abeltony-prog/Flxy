import { Grid } from "@mui/material";
import CaseStatus from "../../src/components/dashboard/CaseStatus";
import ElevationStatus from "../../src/components/dashboard/ElevationStatus";

const FTS = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={4}>
        <ElevationStatus />
      </Grid>
      <Grid item xs={12} lg={8}>
        <CaseStatus />
      </Grid>
    </Grid>
  );
};

export default FTS;
