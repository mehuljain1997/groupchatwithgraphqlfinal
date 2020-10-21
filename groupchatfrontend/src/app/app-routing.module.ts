import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from "@angular/common";
import { GroupchatComponent } from './groupchat/groupchat.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: "full"},
  { path: 'login', component: LoginComponent},
  { path: 'userLogin', component: UserinfoComponent},
  { path: 'home', component: HomeComponent},
  { path: 'groupchat', component: GroupchatComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
