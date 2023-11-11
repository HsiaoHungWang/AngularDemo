import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GoalComponent } from './goal/goal.component';
import { AwardComponent } from './award/award.component';
import { HistoryComponent } from './history/history.component';
import { MemberComponent } from './member/member.component';
import { PersonalComponent } from './personal/personal.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { LoginComponent } from './login/login.component';


//URL > Component
const routes: Routes = [  
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent,title:'AngularDmeo-首頁'},  //http://localhost/home => HomeComponent
  {path:'about', component:AboutComponent,title:'關於我們',
  children:[
    {path:'', component:GoalComponent},
    {path:'goal', component:GoalComponent}, //http://localhost/about/goal
    {path:'award', component:AwardComponent}, 
    {path:'history', component:HistoryComponent}

  ]},
  {path:'contact',component:ContactComponent,title:'聯絡我們'},
  {path:'member',component:MemberComponent,title:'會員中心',
children:[
  {path:'', component:PersonalComponent},
  {path:'personal',component:PersonalComponent},
  {path:'forget',component:ForgetpasswordComponent},
  {path:'change',component:ChangepasswordComponent}
]},
{path:'product/list',component:ProductsComponent,title:'產品資料'},
{path:'product/details/:id',component:ProductdetailsComponent,title:'產品詳細資料'},

{path:'admin',
loadComponent:()=>import('./admin.component').then(a=>a.AdminComponent)},
{path:'login', component:LoginComponent},
{path:'**',component:PageNotFoundComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    bindToComponentInputs: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
