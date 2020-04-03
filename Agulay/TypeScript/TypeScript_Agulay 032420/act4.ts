export{}
function Act4(input: number){
    let temp: number = 0;
    let temp2 :number = 1;
    let fibSum: number;
    let fibonacci : number[] = [];
    for(let i = 0 ; i < input; i++){
        if(i == 0){
            fibSum = temp2 + temp;
            fibonacci.push(fibSum);
        } else{
        fibSum = temp2 + temp;
        fibonacci.push(fibSum);
        temp = temp2;
        temp2 = fibSum;}
    }
    console.log(fibonacci);
}

Act4(5);