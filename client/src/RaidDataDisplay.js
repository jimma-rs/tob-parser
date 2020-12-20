import React from 'react';
import {InputFile} from 'semantic-ui-react-input-file'
import {getLogData} from "./util/parse-logs";
import {Button, Grid, GridColumn, GridRow, Header, Icon, Input, Tab} from "semantic-ui-react";
import TeamTable from "./components/TeamTable";
import Summary from "./components/Summary";
import LootTable from "./components/LootTable";

class RaidDataDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedFileName: 'None', rsn: ''};
        this.uploadFile = this.uploadFile.bind(this);
        this.setRSN = this.setRSN.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    setRSN(event, data) {
        this.setState({rsn: data.value});
    }

    resetState(event) {
        window.location.reload();
        // this.setState({selectedFileName: 'None', rsn: '', parsedData: undefined, selectedFile: undefined,});
        // this.forceUpdate()
    }

    uploadFile(event) {
        this.setState({selectedFileName: event.target.files[0].name, selectedFile: event.target.files[0]});

        var file = event.target.files[0];
        var reader = new FileReader();
        const scope = this;
        reader.onload = function (event) {
            scope.setState({parsedData: getLogData(event.target.result, scope.state.rsn)});
        };

        reader.readAsText(file);
    }

    render() {
        let buttonProps = {disabled: !this.state.rsn};
        const panes = [
            {menuItem: 'Teammates', render: () => <TeamTable tableData={this.state.parsedData.otherPlayers}/>},
            {menuItem: 'Loot', render: () => <LootTable tableData={this.state.parsedData.loot} rsn={this.state.rsn}/>},
        ]

        return (<>
            <Header as='h2' icon textAlign='center'>
                <Icon name='cogs' circular/>
                <Header.Content>ToB Parser</Header.Content>
            </Header>
            <Grid centered columns={2}>
                <GridRow><small><i>Select your raid tracker log file found at: C:\Users\[WINDOWS
                    USER]\.runelite\raid-data tracker\[RS LOGIN]\tob\raid_tracker_data.log</i></small></GridRow>
                <GridRow>
                    <GridColumn textAlign={"right"}>
                        <Input placeholder='Enter RSN...' value={this.state.rsn} onChange={this.setRSN}/>
                    </GridColumn>
                    <GridColumn>
                        <InputFile
                            button={{...buttonProps}}
                            input={{
                                id: 'input-control-id',
                                accept: ".log",
                                onChange: this.uploadFile
                            }}
                        />
                        <Button animated='vertical' onClick={this.resetState}>
                            <Button.Content hidden>Reset</Button.Content>
                            <Button.Content visible>
                                <Icon name='redo'/>
                            </Button.Content>
                        </Button>
                    </GridColumn>
                </GridRow>
                {this.state.parsedData && <Summary summary={this.state.parsedData}/>}
            </Grid>
            <Grid centered columns={16}>
                <GridRow>
                    <GridColumn width={14}>
                        {this.state.parsedData && <Tab panes={panes}/>}
                    </GridColumn>
                </GridRow>
            </Grid>
        </>)
    }
}

export default RaidDataDisplay