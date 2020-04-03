import { Category } from './enums';

interface IShapes {
    name: string;
    noOfSides : number;
    GetName() : string;
    GetArea(): number;
    GetPerimeter(): number;

}

export { IShapes };