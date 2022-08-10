import { Grid } from "@mui/material";
import { useSession } from "next-auth/react";
import CaseStatus from "../src/components/dashboard/CaseStatus";
import MonthlyOverview from "../src/components/dashboard/MonthlyOverview";
import ElevationStatus from "../src/components/dashboard/ElevationStatus";


export default function Index() {
  const { data: session } = useSession();
  // const { data: userInfo } = useGetUserInoQuery({
  //   _eq: session?.user?.email,
  // });

  console.log(session)
  if(session?.user = null){
    return <p>hello</p>
  }else{
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <MonthlyOverview />
      </Grid>
      <Grid item xs={12} lg={4}>
        <ElevationStatus />
      </Grid>
      <Grid item xs={12} lg={8}>
        <CaseStatus />
      </Grid>
    </Grid>
  );
  }
}
