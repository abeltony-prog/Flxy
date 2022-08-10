import { Grid } from "@mui/material";
import CaseStatus from "../src/components/dashboard/CaseStatus";

const Tables = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <CaseStatus />
      </Grid>
    </Grid>
  );
};

export default Tables;
