import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const Searches = () => {
  const topSearches = () => {
    return (
      <Grid item xs={3}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Word of the Day
            </Typography>

            <Typography color="textSecondary">adjective</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    );
  };

  return (
    <Container className="my-5">
      <Typography variant="h5" className="mb-3">
        Trending Searches
      </Typography>

      <Grid container spacing={3}>
        {topSearches()}
        {topSearches()}
        {topSearches()}
        {topSearches()}
      </Grid>
    </Container>
  );
};

export default Searches;
