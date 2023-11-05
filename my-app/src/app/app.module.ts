import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { XyzComponent } from './xyz.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GoalComponent } from './goal/goal.component';
import { AwardComponent } from './award/award.component';
import { HistoryComponent } from './history/history.component';
import { MemberComponent } from './member/member.component';
import { PersonalComponent } from './personal/personal.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    XyzComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    GoalComponent,
    AwardComponent,
    HistoryComponent,
    MemberComponent,
    PersonalComponent,
    ForgetpasswordComponent,
    ChangepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
