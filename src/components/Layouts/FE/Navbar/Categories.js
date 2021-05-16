import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const Categories = () => {
  const classes = useStyles();
  return (
    <div className="mt-2">
      {/*Hide categories in small screen*/}
      <Container component="div">
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <Link to="/" className="alink">
              Logo
            </Link>
          </Grid>

          <Grid item xs={2}>
            <Link to="/" className="alink">
              Logo
            </Link>
          </Grid>

          <Grid item xs={2}>
            <Link to="/" className="alink">
              Logo
            </Link>
          </Grid>

          <Grid item xs={2}>
            <Link to="/" className="alink">
              Logo
            </Link>
          </Grid>

          <Grid item xs={2}>
            <Link to="/" className="alink">
              Logo
            </Link>
          </Grid>

          <Grid item xs={2}>
            <Link to="/" className="alink">
              Logo
            </Link>
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
