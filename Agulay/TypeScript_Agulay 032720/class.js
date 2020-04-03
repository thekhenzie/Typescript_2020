"use strict";
exports.__esModule = true;
var Collection = /** @class */ (function () {
    function Collection() {
        this._collection = new Array();
    }
    Collection.prototype.getAllAlbum = function () { return this._collection; };
    ;
    Collection.prototype.addAlbum = function (newAlbum) {
        this._collection.push(newAlbum);
    };
    Collection.prototype.findAlbumByTitle = function (title) {
        return this._collection.filter(function (item) { return item.title === title; })[0];
    };
    Collection.prototype.getNewestAlbum = function () {
        return this._collection[this._collection.length - 1];
    };
    ;
    return Collection;
}());
exports.Collection = Collection;
