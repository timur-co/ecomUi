import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Categories = () => {
  const classes = useStyles();
  return (
    <div className="mt-2">
      {/*Hide categories in small screen*/}
      <Container component="div">
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <div>Logo</div>
          </Grid>

          <Grid item xs={2}>
            <div>Logo</div>
          </Grid>

          <Grid item xs={2}>
            <div>Logo</div>
          </Grid>

          <Grid item xs={2}>
            <div>Logo</div>
          </Grid>

          <Grid item xs={2}>
            <div>Logo</div>
          </Grid>

          <Grid item xs={2}>
            <div>Logo</div>
          </Grid>
        </Grid>
      </Container>

      {/*Small screen Categories*/}
    </div>
  );
};

export default Categories;
const useStyles = makeStyles({
  catNav: {},
});
