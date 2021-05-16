import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const DailyDiscover = () => {
  const dailyDiscover = () => {
    return (
      <Grid item xs={2}>
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
    <Container maxWidth="lg" className="my-5">
      <Typography variant="h5" className="mb-3">
        Daily Discover
      </Typography>

      <Grid container spacing={3}>
        {dailyDiscover()}
        {dailyDiscover()}
        {dailyDiscover()}
        {dailyDiscover()}
        {dailyDiscover()}
        {dailyDiscover()}

        {dailyDiscover()}
        {dailyDiscover()}
        {dailyDiscover()}
        {dailyDiscover()}
        {dailyDiscover()}
        {dailyDiscover()}
      </Grid>
    </Container>
  );
};

export default DailyDiscover;
