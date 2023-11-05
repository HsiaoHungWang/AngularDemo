import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GoalComponent } from './goal/goal.component';
import { AwardComponent } from './award/award.component';
import { HistoryComponent } from './history/history.component';

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
  {path:'**',component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
