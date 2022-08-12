import { Grid } from "@mui/material";
// import CaseStatus from "../src/components/dashboard/CaseStatus";
import MonthlyOverview from "../src/components/dashboard/MonthlyOverview";

export default function Index() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <MonthlyOverview />
      </Grid>
      {/* <Grid item xs={12} lg={12}>
        <CaseStatus />
      </Grid> */}
    </Grid>
  );
}
