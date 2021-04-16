import React from "react";
import { Container, Typography, Avatar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const PopularCategories = () => {
  const classes = useStyles();
  return (
    <Container className="my-5">
      <Typography variant="h5" className="mb-3">
        Explore Popular Categories
      </Typography>

      <Avatar
        alt="Remy Sharp"
        className={classes.large}
        src="/static/images/avatar/1.jpg"
      />
    </Container>
  );
};

export default PopularCategories;

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
}));
