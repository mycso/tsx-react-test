import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import CircularProgress from "@material-ui/core/CircularProgress";

import { getCardDetails } from "./api";
import styles from "./styles";

class ProblemTwo extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: null,
      loading: true,
    };
    try {
      // @ts-ignore
      getCardDetails().then((data) => {
        console.log(data)
        if (!data) {
          throw new Error("No Data");
        }
        this.setState({
          data: data,
          loading: false,
        });
      });
    } catch (e) {
      throw e;
    }
  }
  render() {
    const { classes } = this.props;
    const { data, loading } = this.state;
    console.log(data)

    if (loading) {
      return (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      );
    }
    return (
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={this.state.data[2]} title={this.state.data[0]} />
          <CardContent className={classes.content}>
            <Typography align="center" gutterBottom variant="h5" component="h2">
              {this.state.data[0]}
            </Typography>
            <div
              className={classes.body}
              dangerouslySetInnerHTML={{ __html: this.state.data[1] }}
            />
          </CardContent>
        </Card>
      </div>
    );
  }
}

// @ts-ignore
export default withStyles(styles)(ProblemTwo);
