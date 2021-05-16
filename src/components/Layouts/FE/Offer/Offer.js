import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const Offer = () => {
  const classes = useStyles();
  return (
    <Container>
      <Typography component="div" className={classes.offerWrapper} gutterBottom>
        <div className={classes.offerBanner}>
          End of the year sale Offer
          <img
            src="https://picsum.photos/1500/100"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
      </Typography>
    </Container>
  );
};

export default Offer;

const useStyles = makeStyles({
  offerWrapper: {
    padding: "20px 10px",
    background: "blue",
    color: "#fff",
  },
  offerBanner: {
    maxWidth: "100%",
    maxHeight: "100px",
    overflow: "hidden",
  },
});
