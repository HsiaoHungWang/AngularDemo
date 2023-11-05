import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//URL > Component
const routes: Routes = [  
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent,title:'AngularDmeo-首頁'},  //http://localhost/home => HomeComponent
  {path:'about', component:AboutComponent,title:'關於我們'},
  {path:'contact',component:ContactComponent,title:'聯絡我們'},
  {path:'**',component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
