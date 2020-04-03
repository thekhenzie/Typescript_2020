interface Label1{
    name:string;
    age: number;
}

function PrintLabel(labelObj:Label1){
    console.log(labelObj.name);
}

let label ={ name:"name", age:10};
PrintLabel(label);