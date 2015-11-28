var uniqueRandomArr = require('unique-random-arr'); //random list 
var playlist = require('./playlist.pl'); //playlist will be saved in a file called playlist.pl

module.exports= {all:playlist,
randon:uniqueRandomArr(playlist)};
