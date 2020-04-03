var tstest = /** @class */ (function () {
    function tstest() {
        this.kurtPro = function (gg, gg1) { return console.log("input 1 = " + gg + ", input 2 = " + gg1); };
    }
    return tstest;
}());
var disp1 = new tstest();
disp1.kurtPro(45, 65);
var disp2 = new tstest();
disp2.kurtPro(false, "TypeScript is hard");
var dips3 = new tstest();
dips3.kurtPro(["Hi", 96], 45 | 45);
