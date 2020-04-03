var input: string = "Hi"

let StringConcat = (input: string, number: number): string => {
    let endString: string = ""
    for(let i = 0; i < number; i++){
        endString += input
    }
    return endString
}

console.log(StringConcat(input,4))