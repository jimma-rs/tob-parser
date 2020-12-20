var _ = require('lodash');

const parseLogs = (logs) => {
    logs = logs.replace(/ /g, ' ');
    logs = logs.trim();
    logs = logs.replace(/\n/g, ',\n');
    logs = '[' + logs + ']';

    return JSON.parse(logs);
};

const getMyDrops = (logs, playerName) => {
    let lootDrops = [];
    let i = 1;

    logs.forEach(d => {
        if (d.specialLootReceiver) {
            lootDrops.push({raidNumber: i, item: d.specialLoot, itemReceiver: d.specialLootReceiver})
        }
        i++
    });
    return lootDrops
};

const getLogData = (logs, playerName) => {
    let parsedLogs = parseLogs(logs);
    let myDeaths = 0;
    let otherDeaths = 0;

    const playerNums = [1, 2, 3, 4, 5];
    let playerDeaths = {};
    let playerLootDrops = {};
    let playerRaids = {};
    let players = [];

    const calcDeaths = (playerNumber, row) => {
        var tempPlayers = _.clone(playerNums);
        let otherPlayers = _.remove(tempPlayers, (x) => {
            return x !== playerNumber
        });
        myDeaths += row['tobPlayer' + playerNumber + 'DeathCount'];
        otherPlayers.forEach(o => {
            let currentPlayer = row['tobPlayer' + o];
            if (currentPlayer) {
                // Count loot drops
                if(row.specialLootReceiver === currentPlayer) {
                    (playerLootDrops[currentPlayer]) ? playerLootDrops[currentPlayer]++ : playerLootDrops[currentPlayer] = 1;
                }

                // Count deaths
                (playerDeaths[currentPlayer]) ? playerDeaths[currentPlayer] += row['tobPlayer' + o + 'DeathCount'] : playerDeaths[currentPlayer] = 1;

                // Count total raids
                (playerRaids[currentPlayer])  ? playerRaids[currentPlayer]++ : playerRaids[currentPlayer] = 1;
            }
            otherDeaths += row['tobPlayer' + o + 'DeathCount']
        })
    };

    parsedLogs.forEach(log => {
        playerNums.forEach(p => {
            if (log['tobPlayer' + p].toLowerCase() === playerName.toLowerCase()) {
                calcDeaths(p, log)
            }
        });
    });

    for (var key in playerDeaths) {
        players.push({
            name: key,
            total: playerRaids[key],
            deaths: playerDeaths[key],
            lootDrops: playerLootDrops[key] || 0,
            averageDeaths: (playerDeaths[key] / playerRaids[key]).toFixed(2)
        })
    }
    return {
        loot: getMyDrops(parsedLogs, playerName),
        totalRaids: parsedLogs.length,
        deaths: myDeaths,
        averageDeaths: (myDeaths / parsedLogs.length).toFixed(2),
        otherPlayerDeaths: otherDeaths,
        otherPlayers: players
    }
};


module.exports.getLogData = getLogData;