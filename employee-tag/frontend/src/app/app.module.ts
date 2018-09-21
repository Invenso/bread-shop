import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FileSaverModule} from 'ngx-filesaver';
import {WebcamModule} from 'ngx-webcam';

import {AppComponent} from './app.component';
import {CameraComponent} from './camera/camera.component';
import {ApiInterceptor} from './service/api.interceptor';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
      AppComponent,
      CameraComponent,
      NavComponent
  ],
  imports: [
      BrowserModule,
      FileSaverModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      WebcamModule,
      NgbModule.forRoot()
  ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true},

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
