import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {Http, HttpModule, RequestOptions} from "@angular/http";
import {RouterModule} from "@angular/router";

import {AppComponent} from "./app.component";
import {UserinfoComponent} from "./userinfo/userinfo.component";
import {UserinfoService} from "./userinfo.service";
import {AuthHttp} from "angular2-jwt";

import {CookieService} from "angular2-cookie/services/cookies.service";
import {authHttpServiceFactory} from "./auth.module";


import {AuthGuard} from "./auth.guard";
import {AuthService} from "./auth.service";

import { ButtonsModule } from 'ngx-bootstrap/buttons';

export const ROUTES = [
  {path: '', pathMatch: 'full', component: UserinfoComponent, canActivate: [AuthGuard]},

];

@NgModule({
  declarations: [
    AppComponent,
    UserinfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    ButtonsModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserinfoService,
    CookieService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions, CookieService]
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
