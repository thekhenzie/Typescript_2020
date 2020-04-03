export{}

function ConvertScale(num:number):void{
    var far:number = (num * 1.8) + 32,cel:number = (num - 32) / 1.8;
    console.log("From Farenheight = " + num + " To Celcius = "+cel.toFixed(2));
    console.log("From Celcius = " + num + " To Farenheight = "+far.toFixed(2));
}
ConvertScale(-40);