var uniqueRandomArr = require('unique-random-arr');
var playlist = require('playlist.plst');

module.exports= {all:playlist,
randon:uniqueRandomArr(playlist)};
