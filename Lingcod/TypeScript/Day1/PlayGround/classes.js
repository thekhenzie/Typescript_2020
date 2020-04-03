var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        console.log('creating a new ReferenceItem...');
    }
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " was published ");
        console.log("" + ReferenceItem.department);
    };
    ReferenceItem.department = "Research";
    return ReferenceItem;
}());
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(newTitle, newYear, edition) {
        var _this = _super.call(this, newTitle, newYear) || this;
        _this.edition = edition;
        return _this;
    }
    return Encyclopedia;
}(ReferenceItem));
// let ref = new ReferenceItem("hehe",2015);
// ref.printItem();
// ref.publisher = "ref";
// console.log(ref.publisher);
var ency = new Encyclopedia('Britannica', 2015, 1998);
// console.log(ency.printItem());
