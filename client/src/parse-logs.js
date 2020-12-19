var _ = require('lodash');

const parseLogs = (logs) => {
  logs = logs.trim();
  logs = logs.replace(/\n/g, ',\n')
  logs = '[' + logs + ']';

  return JSON.parse(logs);
};

// const getMyDrops = (logs) => {
//
//   data.forEach(d => {
//     i++;
//     if(d.specialLootReceiver == "")
//       console.log(i + " " + d.specialLoot)
//   });
// }

const getLogData = (logs, playerName) => {
  let parsedLogs = parseLogs(logs);
  let myDeaths = 0;
  let otherDeaths = 0;

  const playerNums = [1, 2, 3, 4, 5];
  let playerDeaths = {};
  let playerRaids = {};
  let players = [];

  const calcDeaths = (playerNumber, row) => {
    var tempPlayers = _.clone(playerNums);
    let otherPlayers = _.remove(tempPlayers, (x) => {
      return x !== playerNumber
    });

    myDeaths += row['tobPlayer' + playerNumber + 'DeathCount'];
    otherPlayers.forEach(o => {

      if (row['tobPlayer' + o]) {
        if (playerDeaths[row['tobPlayer' + o]]) {
          playerDeaths[row['tobPlayer' + o]] += row['tobPlayer' + o + 'DeathCount'];
        } else {
          playerDeaths[row['tobPlayer' + o]] = 1;
        }
        if (playerRaids[row['tobPlayer' + o]]) {
          playerRaids[row['tobPlayer' + o]]++;
        } else {
          playerRaids[row['tobPlayer' + o]] = 1;
        }
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
      averageDeaths: (playerDeaths[key] / playerRaids[key]).toFixed(2)
    })
  }
  console.log(parsedLogs);
  return {
    totalRaids: parsedLogs.length,
    deaths: myDeaths,
    averageDeaths: (myDeaths/parsedLogs.length).toFixed(2),
    otherPlayerDeaths: otherDeaths,
    otherPlayers: players}
};


module.exports.getLogData = getLogData;