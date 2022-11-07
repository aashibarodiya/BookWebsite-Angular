import { Subject } from "rxjs";
import { delay } from "../utils/delay";
import { LoggedInDetails, LoginInfo, User } from "./user";
import { UserService } from "./user-service";


export class InMemoryUserService implements UserService {

    users: User[]=[
        {
            name:'Vivek Dutta Mishra', 
            email:'vivek@storian.in',
            password:'p@ss',
            roles:[
                "admin","editor"
            ],
            profilePicture:"randomuser.me/api/portraits/men/75.jpg"
        },
        
        {
            name:'Amit Singh', 
            email:'amit@books.org',
            password:'p@ss',
            roles:[
                "user"
            ],
            profilePicture:"randomuser.me/api/portraits/men/51.jpg"
        },
        {
            name:'Sanjay Mall', 
            email:'sanjay@storian.in',
            password:'p@ss'  ,
            profilePicture:"randomuser.me/api/portraits/men/71.jpg"          
        },

    ];

    //loggedInUser?:User;

    loggedInUser = new Subject<LoggedInDetails|undefined>();
  
    getUserStatusAnnouncement() {
        return this.loggedInUser;
    }

    constructor(){      
        console.log('in-memory-user-service created') ;
    }
    getLoggedInUser(): LoggedInDetails | undefined {
        throw new Error("Method not implemented.");
    }
    getAuthenticationHeader() {
        return {};
    }
    

    async logout(): Promise<void> {
        await delay(100)
        //this.loggedInUser=undefined;
        this.loggedInUser.next(undefined); //publish broadcast 
    }

    async login(loginInfo: LoginInfo): Promise<User> {
        await delay(2000);
        console.log('all users', this.users);
        var user = this.users.find(
                                u=> u.email === loginInfo.email && 
                                u.password ===loginInfo.password
                            );
        if(user){
            
            var u= {user:{
                ...user,
                password:''
            },
            token:'dummy-token'
        };
            //this.loggedInUser=u;

            this.loggedInUser.next(u); //publish/broadcast about next user

            return u.user;
        }
        else
            throw new Error('Invalid credentials');
    }

    async register(user: User): Promise<User> {
        await delay(2000);
        var existingUser=this.users.find(u=>u.email===user.email);
        if(existingUser)
            throw new Error('Duplicate Email Id');
        
        this.users.push(user);
        return {
            ...user,
            password:''
        };
    }

    async isEmailRegistered(email:string):Promise<boolean>{

        await delay(1000);
        var user = this.users.find(u=>u.email === email);

        return user!==undefined;

    }
    
}