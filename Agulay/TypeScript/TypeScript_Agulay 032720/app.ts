import {Total} from './generics'
import{IAlbums} from './interface'
import{Release, ReleaseVer, ReleaseType}from './ReleaseType'
import{Collection} from './class'
let twiceAlbums: Array<IAlbums> = [
    { id : 1,   title: 'The Story Begins',      noOfTracks: 6,  bandOrSinger: 'TWICE', releaseDate: new Date(2015,10,20),   releaseType: ReleaseType.Mini },
    { id : 2,   title: 'Page Two',              noOfTracks: 7,  bandOrSinger: 'TWICE', releaseDate: new Date(2016,4,25),    releaseType: ReleaseType.Mini },
    { id : 3,   title: 'TWICEcoaster: Lane 1',  noOfTracks: 7,  bandOrSinger: 'TWICE', releaseDate: new Date(2016,10,24),   releaseType: ReleaseType.Mini },
    { id : 4,   title: 'TWICEcoaster: Lane 2',  noOfTracks: 13, bandOrSinger: 'TWICE', releaseDate: new Date(2017,2,20),    releaseType: ReleaseType.Mini ,         release:Release.Repackage_Special},
    { id : 5,   title: `What's Twice`,          noOfTracks: 4,  bandOrSinger: 'TWICE', releaseDate: new Date(2017,2,24),    releaseType: ReleaseType.Mini ,                                             releaseVer: ReleaseVer.Japanese},
    ]

let albumCollection: Collection<IAlbums> = new Collection<IAlbums>();
twiceAlbums.forEach(album => albumCollection.addAlbum(album));

let newest: IAlbums = albumCollection.getNewestAlbum();
console.log(`Your latest album collection, ${newest.title} was released last ${newest.releaseDate.getFullYear()} with ${newest.noOfTracks} songs!`);

let total = Total<IAlbums>(albumCollection.getAllAlbum());
console.log(`There are ${total} albums collected as of the momment.`);


let fAlbum: IAlbums = albumCollection.findAlbumByTitle('Page Two');
console.log(`${fAlbum.title} released  ${fAlbum.releaseDate.getFullYear()} with  ${fAlbum.noOfTracks} songs!`);

let allAlbums : Array<IAlbums> = albumCollection.getAllAlbum();
console.log('\nAlbum Collection:\n');

allAlbums.forEach(album => {
    console.log(`${album.title} - ${album.releaseDate.getFullYear()}`);    
});