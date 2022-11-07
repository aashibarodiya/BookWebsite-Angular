import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginScreenComponent } from './screens/user-login-screen/user-login-screen.component';
import { UserRegisterScreenComponent } from './screens/user-register-screen/user-register-screen.component';
import { UserHomeScreenComponent } from './screens/user-home-screen/user-home-screen.component';
import { UserFavoritesScreenComponent } from './screens/user-favorites-screen/user-favorites-screen.component';
import { FormsModule } from '@angular/forms';
import { RouterState } from '@angular/router';
import { UtilsModule } from '../utils/utils.module';
import { RoutesModule } from '../routes/routes.module';
import { UniqueEmailDirective } from './validators/unique-email.directive';
import { MembershipComponent } from './components/membership/membership.component';



@NgModule({
  declarations: [
    UserLoginScreenComponent,
    UserRegisterScreenComponent,
    UserHomeScreenComponent,
    UserFavoritesScreenComponent,
    UniqueEmailDirective,
    MembershipComponent,

  ],
  exports:[
    UserLoginScreenComponent,
    UserRegisterScreenComponent,
    UserHomeScreenComponent,
    UserFavoritesScreenComponent,
    MembershipComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RoutesModule,
    UtilsModule
    
  ]
})
export class UsersModule { }
