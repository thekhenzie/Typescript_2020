import {ReleaseType, ReleaseVer, Release} from './ReleaseType'
import {Collection} from './class'
export{IStorageItems, IStorage, IAlbums}

interface IStorage<T>{
    // getAlbum: (title: T) => T;
    addAlbum: (newItem: T) => void;
    getAllAlbum: () => Array<T>;
    getNewestAlbum:()=> T;
}

interface IStorageItems {
    title?: string,
    noOfTracks?: number,
    releaseDate?: Date,
    releaseType?: ReleaseType,
    releaseVer?: ReleaseVer,
    release?: Release,
}
interface IAlbums{
    id: number;
    title: string;
    noOfTracks: number;
    bandOrSinger: string;
    releaseDate: Date;
    releaseType: ReleaseType;
    releaseVer?: ReleaseVer;
    release?: Release;
}
