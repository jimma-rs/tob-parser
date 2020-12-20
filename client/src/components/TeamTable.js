import React, {Component} from 'react';
import {Icon, Table} from "semantic-ui-react";
import _ from "lodash";

class TeamTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            column: 'total',
            direction: {
                name: 'ascending',
                total: 'descending',
                deaths: 'ascending',
                averageDeaths: 'ascending',
                lootDrops: 'ascending'
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

    render() {
        const {column, direction} = this.state;
        return (
            <Table sortable celled fixed unstackable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell
                            sorted={column === 'name' ? direction.name : null}
                            onClick={() => this.toggleDirection('name')}
                        >
                            <Icon name="trophy"/>Name
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'total' ? direction.total : null}
                            onClick={() => this.toggleDirection('total')}
                        >
                            <Icon name="user"/>Total Raids
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'deaths' ? direction.deaths : null}
                            onClick={() => this.toggleDirection('deaths')}
                        >
                            <Icon name="star"/>Deaths
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'averageDeaths' ? direction.averageDeaths : null}
                            onClick={() => this.toggleDirection('averageDeaths')}
                        >
                            <Icon name="bomb"/>Average Deaths
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'lootDrops' ? direction.lootDrops : null}
                            onClick={() => this.toggleDirection('lootDrops')}
                        >
                            <Icon name="gift"/>Loot Drops
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body styles={{'max-height': '85vh'}}>
                    {_.map(
                        this.getSortedRanking(this.props.tableData, column, direction[column]),
                        ({name, total, deaths, averageDeaths, lootDrops}) => (
                            <Table.Row key={name}>
                                <Table.Cell>{name}</Table.Cell>
                                <Table.Cell>{total}</Table.Cell>
                                <Table.Cell>{deaths}</Table.Cell>
                                <Table.Cell>{averageDeaths}</Table.Cell>
                                <Table.Cell>{lootDrops}</Table.Cell>
                            </Table.Row>
                        )
                    )}
                </Table.Body>
            </Table>
        );
    }
}

export default TeamTable