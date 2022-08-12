import {
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
  SelectInput,
  Select
} from "@mui/material";
import BaseCard from "../src/components/baseCard/BaseCard";

const Forms = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="FTS">
          <Stack spacing={3}>
            <TextField
              label="Case Id"
              variant="outlined"
            />
            <TextField id="" label="From" variant="outlined" />
            <TextField
              label="To"
              type="text"
              variant="outlined"
            />
                        <TextField
              label="Home Region"
              type="text"
              variant="outlined"
            />

            <TextField
              error
              id="er-basic"
              label="Elevated"
              defaultValue="L1 , L2 , L3 or NA"
              variant="outlined"
            />

<TextField
              id="outlined-multiline-static"
              label="Issu Sumary"
              multiline
              rows={4}
              defaultValue="Type in the Sumarry"
            />

           <select className="form-control py-2">
              <option value="">Select Type</option>
              <option value="">Handover to Home region</option>
              <option value="">FTS</option>
              <option value="">Extended Hours request</option>
              <option value="">Warm HandOver</option>
           </select>

            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">More</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="DM Request"
                  control={<Radio />}
                  label="DM Request"
                />
                <FormControlLabel
                  value="Critical"
                  control={<Radio />}
                  label="Severity One"
                />
               <FormControlLabel
                  value="Critical"
                  control={<Radio />}
                  label="Critical to the business"
                />
                <FormControlLabel
                  value="Customer Availability"
                  control={<Radio />}
                  label="Customer Availability"
                />
              </RadioGroup>
            </FormControl>
          </Stack>
          <br />
          <Button variant="contained" mt={2}>
            Submit
          </Button>
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default Forms;
