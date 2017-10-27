const express = require('express')
const bodyParser = require('body-parser')
var spotify = require('../utils/SpotifyUtils.js')
const router = express.Router();
var ip = require('ip');
var axios = require('axios');

var generic = spotify.SpotifyUserInitialization;
var confirmExpectedPlaylistPlaying = spotify.confirmExpectedPlaylistPlaying;
var addTrack = spotify.addTrackToPlaylist;
var play = spotify.playSong;
var next = spotify.nextSong;
var localStorage = require('localStorage');


// create EventEmitter object
const EventEmitter = require('events');
var eventListener = new EventEmitter();


var spotifyData = {};

router.get("/soundcloud", function (req, res) {
  res.send(req);
})

router.get("/registerHostSpotify", function (req, res) {
  console.log("Receieved request.");

  axios.post("https://rocky-brook-68243.herokuapp.com/register", {
    lan: ip.address()
  })

  var token = "Bearer " + req.query.token;
  generic(token, res);
})

router.get("/continueHostSpotify", function (req, res) {
  console.log("Receieved request.");
  var token = "Bearer " + req.query.token;
  var user_id = req.query.user;
  var playlist_id = req.query.playlist;
  var playlist_uri = "spotify:user:" + user_id + ":playlist:" + playlist_id;

  spotifyData[user_id] = {
    playlist_id,
    token,
    user_id
  }
  confirmExpectedPlaylistPlaying(token, user_id, playlist_id, playlist_uri, res);
})

function firstSong() {
  console.log("First song called.");
  var user_id = Object.keys(spotifyData)[0];
  var playlist_id = spotifyData[user_id].playlist_id;
  var token = spotifyData[user_id].token;
  addNextAndPlay(user_id, playlist_id, token, true);
}

function addNextAndPlay(user_id, playlist_id, token, first) {
  if (first) {
    setTimeout(function () {
      var user_id = Object.keys(spotifyData)[0];
      var playlist_id = spotifyData[user_id].playlist_id;
      var token = spotifyData[user_id].token;
      addNextAndPlay(user_id, playlist_id, token, false);
    }, (3) * 1000)
  } else {
    var queue = JSON.parse(localStorage.getItem("SongQueue")).list;
    var nextSong = queue.pop();
    // localStorage.setItem("currentlyPlaying", JSON.stringify(nextSong))
    console.log("SONG UP NEXT!!!!! : ", nextSong);
    var song_uri = "spotify:track:" + nextSong.id;

    eventListener.emit("nextSong_Spotify", {
      currentlyPlaying: nextSong,
      list: queue
    });
    localStorage.setItem("SongQueue", JSON.stringify({ list: queue }));
    var queue = JSON.parse(localStorage.getItem("SongQueue")).list;
    addTrack(user_id, playlist_id, token, song_uri)

    setTimeout(function () {
      var user_id = Object.keys(spotifyData)[0];
      var playlist_id = spotifyData[user_id].playlist_id;
      var token = spotifyData[user_id].token;
      addNextAndPlay(user_id, playlist_id, token, false);
    }, (nextSong.durationS - 1) * 1000)
  }



}

module.exports = {
  router,
  eventListener,
  firstSong
};
