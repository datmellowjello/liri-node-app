require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var moment = require("moment");

var axios = require("axios");

var fs = require("fs");

var Spotify = require("node-spotify-api");

