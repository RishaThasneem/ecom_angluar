import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { ContentComponent } from './content/content.component';
import { CustomerModule } from './customer/customer.module';
import { ResellerModule } from './reseller/reseller.module';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DatePipe } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { MaterialDesignModule } from './material-design/material-design.module';
import { FooterComponent } from './footer/footer.component';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminGuardGuard } from './admin/admin-guard.guard';



@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainToolbarComponent,
    ContentComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    OtpVerifyComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    HttpClientModule ,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule ,
    FormsModule,
    CustomerModule,
    ResellerModule,
    AdminModule,
    MaterialDesignModule,
  ],
  providers: [
    DatePipe,
    AuthGuard,
    AdminGuardGuard
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    OtpVerifyComponent,
  ],
})
export class AppModule { }
