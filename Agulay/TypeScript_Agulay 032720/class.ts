import {IStorage, IStorageItems} from './interface'
export{Collection}

class Collection<T extends IStorageItems> implements IStorage<T>{
    
    private _collection = new Array<T>();
    getAllAlbum(){return this._collection};

    addAlbum(newAlbum:T){
        this._collection.push(newAlbum);
    }
    findAlbumByTitle(title: string): T{
        return this._collection.filter(item => item.title === title)[0];
    }
    getNewestAlbum():T {
        return this._collection[this._collection.length-1];
    };
}
