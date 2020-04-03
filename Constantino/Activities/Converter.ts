
    let celsius: number;
    let fahrenheit: number;
    let FtoC = (fahrenheit: number): number => {return((fahrenheit - 32)/ 1.8)}
    let CtoF = (celsius: number): number => {return((celsius * 1.8) + 32)}

    console.log(CtoF(30));
    console.log(FtoC(30));


