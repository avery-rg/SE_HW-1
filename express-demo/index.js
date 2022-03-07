const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

//launches express.json
app.use(express.json());

//creates an array to hold the tweet data
const tweets = [];
const static_path = path.join(__dirname);
app.use(express.static(static_path));
app.use(express.urlencoded({ extended: true }));

//reads in the JSON file and parse all the tweet data
//into the tweets array
fs.readFile('./favs.json', 'utf-8',(err,data) =>{
    let tweetData = JSON.parse(data);
    let i = 0;

    tweetData.forEach(tweet => {
        tweets[i] = tweet;
        i++;
    });
});

//sends the tweets to the /api/tweets extention to pull from later
app.get('/api/tweets', (req, res) => {
    res.send(tweets);
});

//launches the site on port 3000
app.listen(3000, () => console.log('Listening on port 3000...'));
