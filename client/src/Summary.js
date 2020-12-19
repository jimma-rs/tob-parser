import React, {Component} from 'react';
import {Grid} from "semantic-ui-react";

class ResultTable extends Component {
  render() {
    return (<Grid columns={2}>
      <Grid.Row>
        <Grid.Column width={8} textAlign={"right"}>
          <b>Total Raids</b>
        </Grid.Column>
        <Grid.Column width={8}>
          {this.props.summary.totalRaids}
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={8}  textAlign={"right"}>
          <b>Total Deaths</b>
        </Grid.Column>
        <Grid.Column width={8}>
          {this.props.summary.deaths}
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={8}  textAlign={"right"}>
          <b>Average Deaths</b>
        </Grid.Column>
        <Grid.Column width={8}>
          {this.props.summary.averageDeaths}
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={8}  textAlign={"right"}>
          <b>Other Player Deaths</b>
        </Grid.Column>
        <Grid.Column width={8}>
          {this.props.summary.otherPlayerDeaths}
        </Grid.Column>
      </Grid.Row>

    </Grid>)
  }
}

export default ResultTable