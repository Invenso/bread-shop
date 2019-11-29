import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WebcamModule} from 'ngx-webcam';
import {AppRoutingModule} from './app-routing/app-routing.module';

import {AppComponent} from './app.component';
import {CameraComponent} from './create/components/camera.component';
import {DocumentFormComponent} from './create/components/document-form.component';
import {SettingsFormComponent} from './create/components/settings-form.component';
import {CreateTagComponent} from './create/create-tag.component';
import {NavComponent} from './nav/nav.component';
import {ApiInterceptor} from './service/api.interceptor';
import {DownloadComponent} from './download/download.component';

@NgModule({
    declarations: [
        AppComponent,
        CameraComponent,
        CreateTagComponent,
        NavComponent,
        DocumentFormComponent,
        SettingsFormComponent,
        DownloadComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        WebcamModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
