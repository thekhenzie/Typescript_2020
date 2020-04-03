export{}

let getFibNum = (iteration: number): number[] => {
    let arrFibNum: number[] = [];
    let firstNum = 0, secondNum = 1;

    for(let i = 0; i<iteration; i++){
        
        arrFibNum.push(secondNum);

        let tempNum = firstNum;
        firstNum = secondNum;
        secondNum = tempNum+firstNum;
        
    }
    return arrFibNum;
}

console.log(getFibNum(5).join(" "))

/*
let displayFibNum = (num: number):void =>{
    let result:string = "";

    getFibNum(num).forEach((number) => {
        result += number + " ";
    });

    console.log(result);
}

displayFibNum(5);*/