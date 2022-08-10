import { Grid } from "@mui/material";
import CaseStatus from "../src/components/dashboard/CaseStatus";
import MonthlyOverview from "../src/components/dashboard/MonthlyOverview";
import ElevationStatus from "../src/components/dashboard/ElevationStatus";

export default function Index() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <MonthlyOverview />
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={4}>
        <ElevationStatus />
      </Grid>
      <Grid item xs={12} lg={8}>
        <CaseStatus />
      </Grid>
    </Grid>
  );
}
