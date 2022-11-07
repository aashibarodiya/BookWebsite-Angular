import { Observable, Subject } from "rxjs";
import { LoggedInDetails, LoginInfo, User } from "./user";

export interface UserService{
    
    login(loginInfo:LoginInfo):Observable<LoggedInDetails>|Promise<User>;

    register(user:User):Observable<User>|Promise<User>;

    isEmailRegistered(email:string):Promise<boolean>|Observable<boolean>;

    getUserStatusAnnouncement():Subject<LoggedInDetails|undefined>;

    logout():Observable<void>|Promise<void>;

    getAuthenticationHeader():any; 

    getLoggedInUser():LoggedInDetails|undefined;

}