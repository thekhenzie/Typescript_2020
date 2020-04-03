//basic concept of generics
const last = <T>(arr: T[]): T => {
    return arr[arr.length-1];
};

const l = last([1,2,3]);

const l2 = last<string>(["a", "b", "c"]);

const makeArr = <T, Y>(x: T, y: Y): [T, Y] => {
    return [x, y];
};

const v = makeArr(5, 6);
const v2 = makeArr("a", "b");
const v3 = makeArr<string | null, number>("a", 5);

//generics using extends
const makeFullName = <T extends {firstName: string, lastName: string}>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName
    };
};

const v4 = makeFullName({firstName: 'bob', lastName: 'junior', age: 15});
//const v5 = makeFullName({another: 'bob', lastName: 'junior', age: 15});

//generics using interface

interface Tab<T>{
    id: string;
    postion: number;
    data: T;
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;