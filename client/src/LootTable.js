import React, {Component} from 'react';
import {Checkbox, Form, Icon, Table} from "semantic-ui-react";
import _ from "lodash";

class ResultTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myLoot: false,
            column: 'raidNumber',
            currentData: this.props.tableData,
            direction: {
                raidNumber: 'ascending',
                item: 'ascending',
                itemReceiver: 'ascending'
            }
        };
    }

    toggleDirection = column => {
        const direction = this.state.direction[column];
        this.setState(previousState => {
            return {
                ...previousState,
                column: column,
                direction: {
                    ...previousState.direction,
                    [column]: direction === 'ascending' ? 'descending' : 'ascending'
                }
            };
        });
    };

    getSortedRanking = (ranking, column, direction) => {
        let data = _.sortBy(ranking, column);
        if (direction === 'descending') {
            data.reverse();
        }
        return data;
    };
    onMyLootChange = (event, data) => {
      let filteredData = this.props.tableData;
      if(data.checked) {
        filteredData = this.props.tableData.filter(r => {
          return r.itemReceiver.toLowerCase() === this.props.rsn.toLowerCase()
        });
      }
      this.setState({myLoot: data.checked, currentData:filteredData})
    };

    render() {
        const {column, direction} = this.state;
        return (
            <>
              <br/>
              <Form>
                <Form.Field>
                  <Checkbox checked={this.state.myLoot} toggle label='My loot' onChange={this.onMyLootChange}/>
                </Form.Field>
              </Form>
            <Table sortable celled fixed unstackable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell
                            sorted={column === 'raidNumber' ? direction.raidNumber : null}
                            onClick={() => this.toggleDirection('raidNumber')}
                        >
                            <Icon name="hashtag"/>Raid Number
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'item' ? direction.item : null}
                            onClick={() => this.toggleDirection('item')}
                        >
                            <Icon name="gift"/>Item
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'itemReceiver' ? direction.itemReceiver : null}
                            onClick={() => this.toggleDirection('itemReceiver')}
                        >
                            <Icon name="user"/>Item Receiver
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body styles={{'max-height': '85vh'}}>
                    {_.map(
                        this.getSortedRanking(this.state.currentData, column, direction[column]),
                        ({raidNumber, item, itemReceiver}) => (
                            <Table.Row key={raidNumber}>
                                <Table.Cell>{raidNumber}</Table.Cell>
                                <Table.Cell>{item}</Table.Cell>
                                <Table.Cell>{itemReceiver}</Table.Cell>
                            </Table.Row>
                        )
                    )}
                </Table.Body>
            </Table>
            </>
        );
    }
}

export default ResultTable