import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'


//component routes
import { userRoutes } from './user.routes'

//component
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  providers: [

  ]
})
export class UserModule { }
