"use strict";
exports.__esModule = true;
var generics_1 = require("./generics");
var ReleaseType_1 = require("./ReleaseType");
var class_1 = require("./class");
var twiceAlbums = [
    { id: 1, title: 'The Story Begins', noOfTracks: 6, bandOrSinger: 'TWICE', releaseDate: new Date(2015, 10, 20), releaseType: ReleaseType_1.ReleaseType.Mini },
    { id: 2, title: 'Page Two', noOfTracks: 7, bandOrSinger: 'TWICE', releaseDate: new Date(2016, 4, 25), releaseType: ReleaseType_1.ReleaseType.Mini },
    { id: 3, title: 'TWICEcoaster: Lane 1', noOfTracks: 7, bandOrSinger: 'TWICE', releaseDate: new Date(2016, 10, 24), releaseType: ReleaseType_1.ReleaseType.Mini },
    { id: 4, title: 'TWICEcoaster: Lane 2', noOfTracks: 13, bandOrSinger: 'TWICE', releaseDate: new Date(2017, 2, 20), releaseType: ReleaseType_1.ReleaseType.Mini, release: ReleaseType_1.Release.Repackage_Special },
    { id: 5, title: "What's Twice", noOfTracks: 4, bandOrSinger: 'TWICE', releaseDate: new Date(2017, 2, 24), releaseType: ReleaseType_1.ReleaseType.Mini, releaseVer: ReleaseType_1.ReleaseVer.Japanese },
];
var albumCollection = new class_1.Collection();
twiceAlbums.forEach(function (album) { return albumCollection.addAlbum(album); });
var newest = albumCollection.getNewestAlbum();
console.log("Your latest album collection, " + newest.title + " was released last " + newest.releaseDate.getFullYear() + " with " + newest.noOfTracks + " songs!");
var total = generics_1.Total(albumCollection.getAllAlbum());
console.log("There are " + total + " albums collected as of the momment.");
var fAlbum = albumCollection.findAlbumByTitle('Page Two');
console.log(fAlbum.title + " released  " + fAlbum.releaseDate.getFullYear() + " with  " + fAlbum.noOfTracks + " songs!");
var allAlbums = albumCollection.getAllAlbum();
console.log('\nAlbum Collection:\n');
allAlbums.forEach(function (album) {
    console.log(album.title + " - " + album.releaseDate.getFullYear());
});
