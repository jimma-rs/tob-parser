# ToB Raid Parser

This app is designed to parse the raid-data-tracker.log file from the RuneLite *Raid Data Tracker* plugin found at https://github.com/CasvM/raid-tracker

This app will give you information like data on your team mates, their drops and deaths. Your loot list and other players loot drops.

Example line of the log parsed:
```
{
     "chestOpened": true,
     "raidComplete": true,
     "loggedIn": true,
     "challengeMode": false,
     "inRaidChambers": false,
     "inTheatreOfBlood": true,
     "FreeForAll": false,
     "upperTime": -1,
     "middleTime": -1,
     "lowerTime": -1,
     "raidTime": 1648,
     "totalPoints": -1,
     "personalPoints": -1,
     "teamSize": 5,
     "percentage": -1.0,
     "completionCount": 40,
     "specialLoot": "Scythe of vitur (uncharged)",
     "specialLootReceiver": "BobPker420",
     "specialLootInOwnName": false,
     "specialLootValue": -1,
     "kitReceiver": "",
     "dustReceiver": "",
     "petReceiver": "",
     "petInMyName": false,
     "lootSplitReceived": -1,
     "lootSplitPaid": -1,
     "lootList": [
       {
         "name": "Grimy toadflax",
         "id": 3049,
         "quantity": 32,
         "price": 608
       },
       {
         "name": "Gold ore",
         "id": 444,
         "quantity": 294,
         "price": 44100
       },
       {
         "name": "Adamantite ore",
         "id": 449,
         "quantity": 111,
         "price": 44400
       }
     ],
     "maidenTime": 165,
     "bloatTime": 127,
     "nyloTime": 368,
     "sotetsegTime": 187,
     "xarpusTime": 196,
     "verzikTime": 605,
     "mvp": "BobPker420",
     "mvpInOwnName": false,
     "tobPlayer1": "JimmyJimJim",
     "tobPlayer2": "BobPker420",
     "tobPlayer3": "CuddleGhost69",
     "tobPlayer4": "TheaterPlayer4",
     "tobPlayer5": "BobbyBobBob",
     "tobPlayer1DeathCount": 1,
     "tobPlayer2DeathCount": 0,
     "tobPlayer3DeathCount": 1,
     "tobPlayer4DeathCount": 1,
     "tobPlayer5DeathCount": 0,
     "uniqueID": "77556264-feca-43d9-9e56-79288a7bc178",
     "killCountID": "47a56912-b7a4-4e0e-a9ee-dc116e78bf2e",
     "date": 1601186167583
   }
```

Initial setup and project based off: 
https://medium.com/weekly-webtips/create-and-deploy-your-first-react-web-app-with-a-node-js-backend-ec622e0328d7 - Great guide to starting a React/NodeJS project 