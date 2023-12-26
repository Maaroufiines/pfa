import { Role } from "./role";

export class User{
    idUser! : number;
    firstName! : string;
    lastName! : string;
    email! : string;
    password! : string;
    address! : string;
    dayOfBirth! : Date;
    telNum! : string;
    role! : Role;
    cin! :string
}