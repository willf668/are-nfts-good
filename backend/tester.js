const path = require('path');

const apiImport = require(path.resolve("./index.js"));
const API = new apiImport();
/*API.getMostRecentTweet('areNftsGood').then(data => {
    console.log(data.polls.options);
});*/
API.createPoll("Joe",["Jimmy","Kimmel","LIVE!"],1440)