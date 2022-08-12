import {
    Grid,
    Stack,
    TextField,
    FormLabel,
    FormControl,
    Button,
  } from "@mui/material";
  import BaseCard from "../../src/components/baseCard/BaseCard";
  
  const Forms = () => {
    return (
      <Grid container spacing={0}>
        <Grid item xs={12} lg={12}>
          <BaseCard title="Elevation">
            <Stack spacing={3}>
              <TextField label="Case Id" variant="outlined" />
              <TextField id="" label="From" variant="outlined" />
              <TextField label="To" type="text" variant="outlined" />
              <TextField label="Home Region" type="text" variant="outlined" />
  
              <TextField
                error
                id="er-basic"
                label="Elevated"
                defaultValue="L1 , L2 , L3 or NA"
                variant="outlined"
              />
              <select className="form-control py-2">
                <option value="">Select Product</option>
                <option value="">DP</option>
                <option value="">LRP</option>
              </select>
              <TextField label="version" type="text" variant="outlined" />
  
              <TextField id="er-basic" label="Title" variant="outlined" />
              <TextField
                id="outlined-multiline-static"
                label="Issu Sumary"
                multiline
                rows={4}
                defaultValue="Type in the Sumarry"
              />
  
              <TextField
                id="outlined-multiline-static"
                label="What has been Done"
                multiline
                rows={3}
              />
              <TextField
                id="outlined-multiline-static"
                label="Whats next"
                multiline
                rows={4}
              />
  
              <select className="form-control py-2">
                <option value="">Select FTS Type</option>
                <option value="">Handover to Home region</option>
                <option value="">FTS</option>
                <option value="">Extended Hours request</option>
                <option value="">Warm HandOver</option>
              </select>
  
              <FormControl className="row col-md-12">
                <FormLabel id="demo-radio-buttons-group-label">More</FormLabel>
                <br />
  
                <div class="row">
                  <div class="col-md-3">
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        DM Request
                      </label>
                    </div>{" "}
                  </div>
                  <div class="col-md-3">
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        Customer Available
                      </label>
                    </div>{" "}
                  </div>
                  <div class="col-md-3">
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        Clitical to the business
                      </label>
                    </div>{" "}
                  </div>
                  <div class="col-md-3">
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        Severity One
                      </label>
                    </div>{" "}
                  </div>
                </div>
              </FormControl>
            </Stack>
            <br />
            <div class="row g-3">
              <div class="col-md-9">
                <Button variant="contained" mt={2}>
                  Submit
                </Button>
              </div>
              <div class="col-md-3">
                <Button variant="contained" mt={2}>
                  Generate Template
                </Button>
              </div>
            </div>
          </BaseCard>
        </Grid>
      </Grid>
    );
  };
  
  export default Forms;
  