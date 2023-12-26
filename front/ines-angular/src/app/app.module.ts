import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_shared/login/login.component';
import { SignUpComponent } from './_shared/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './_shared/forget-password/forget-password.component';
import { Error404Component } from './_shared/error404/error404.component';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MatButtonModule} from '@angular/material/button';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    ButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
