import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Container>
        <Grid container className="pt-5">
          <Grid item xs={3}>
            <Typography gutterBottom>Customer Service</Typography>
            <li style={{ listStyle: "none" }}>How to buy</li>
            <li style={{ listStyle: "none" }}>Shipping and Delivery</li>
          </Grid>

          <Grid item xs={3}>
            <Typography gutterBottom>About</Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography gutterBottom>Payment Option</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
const useStyles = makeStyles({
  footer: {
    background: "#bdc3c7",
    minHeight: "30vh",
  },
});
