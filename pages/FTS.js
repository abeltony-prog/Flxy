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
              id="outlined-multiline-static"
              label="Text Area"
              multiline
              rows={4}
              defaultValue="Default Value"
            />
            <TextField
              error
              id="er-basic"
              label="Error"
              defaultValue="ad1avi"
              variant="outlined"
            />
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Terms & Condition"
                type="checkbox"
              />
              <FormControlLabel
                disabled
                control={<Checkbox/>}
                label="Disabled"
              />
            </FormGroup>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
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

      <Grid item xs={12} lg={12}>
        <BaseCard title="Form Design Type">
          <Stack spacing={3} direction="row">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
          </Stack>
        </BaseCard>
      </Grid>
    </Grid>
  );
};

export default Forms;
