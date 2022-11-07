import { Author } from "./author";
import { Book } from "./book";

export interface LoginInfo{
    email:string;
    password?:string;
}

export interface User extends LoginInfo{
    name:string;
    roles?:string[];
    profilePicture:string;
    favoriteBooks?:Book[];
    favoriteAuthors?:Author[];

}

export interface LoggedInDetails{
    user:User;
    token:String;
}

