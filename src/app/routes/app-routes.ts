import { Route } from "@angular/router";
import { AuthorAddScreenComponent } from "../authors/screens/author-add-screen/author-add-screen.component";
import { AuthorDetailsScreenComponent } from "../authors/screens/author-details-screen/author-details-screen.component";
import { AuthorListScreenComponent } from "../authors/screens/author-list-screen/author-list-screen.component";
import { AuthorManageScreenComponent } from "../authors/screens/author-manage-screen/author-manage-screen.component";
import { BookAddScreenComponent } from "../books/screens/book-add-screen/book-add-screen.component";
import { BookDetailsScreenComponent } from "../books/screens/book-details-screen/book-details-screen.component";
import { BookListScreenComponent } from "../books/screens/book-list-screen/book-list-screen.component";
import { BookManageScreenComponent } from "../books/screens/book-manage-screen/book-manage-screen.component";
import { HomeScreenComponent } from "../shell/screens/home-screen/home-screen.component";
import { NotFoundScreenComponent } from "../shell/screens/not-found-screen/not-found-screen.component";
import { UserLoginScreenComponent } from "../users/screens/user-login-screen/user-login-screen.component";
import { UserRegisterScreenComponent } from "../users/screens/user-register-screen/user-register-screen.component";
import { ChatComponent } from "../utils/components/chat/chat.component";
import { RxjstestComponent } from "../utils/components/rxjstest/rxjstest.component";


export const appRoutes: Route[]=[
    {path:"", component: HomeScreenComponent },
    {path:"author/list", component:AuthorListScreenComponent},
    {path:"author/add",component:AuthorAddScreenComponent},   
    {path:"chat", component:ChatComponent},

    {path:"author/details/:id",component:AuthorDetailsScreenComponent},    
    {path:"author/manage", component:AuthorManageScreenComponent},

    {path:"book/list", component:BookListScreenComponent},
    {path:"book/details/:id", component:BookDetailsScreenComponent},
    {path:"book/add",component:BookAddScreenComponent},
    {path:"book/manage",component:BookManageScreenComponent},

    {path:"user/login", component:UserLoginScreenComponent},
    {path:"user/register",component:UserRegisterScreenComponent},


    //to handle all other url_s

    {path:"**", component:NotFoundScreenComponent}

]