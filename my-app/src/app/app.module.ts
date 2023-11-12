import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeTw from '@angular/common/locales/zh-Hant';
import localeJa from '@angular/common/locales/ja';
import localeKo from '@angular/common/locales/ko';
import { HttpClientModule } from '@angular/common/http';
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
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ChildComponent } from './child/child.component';
import { TruncatePipe } from './truncate.pipe';
import { CardmaskPipe } from './cardmask.pipe';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { HighlightDirective } from './highlight.directive';
import { AutouppercaseDirective } from './autouppercase.directive';
import { IsLoginDirective } from './is-login.directive';
import { RegisterComponent } from './register/register.component';
import { ShipperMgmtComponent } from './shipper-mgmt/shipper-mgmt.component';
import { ShipperAddComponent } from './shipper-add/shipper-add.component';



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
    ChangepasswordComponent,
    ProductsComponent,
    ProductdetailsComponent,
    LoginComponent,
    ChildComponent,
    TruncatePipe,
    CardmaskPipe,
    DirectivedemoComponent,
    HighlightDirective,
    AutouppercaseDirective,
    IsLoginDirective,
    RegisterComponent,
    ShipperMgmtComponent,
    ShipperAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    registerLocaleData(localeTw,'tW');
    registerLocaleData(localeJa,'ja');
    registerLocaleData(localeKo,'ko');
  }
 }
