import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtDecoderComponent } from './jwt-decoder/jwt-decoder.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { JsonDiffComponent } from './json-diff/json-diff.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { JsonViewerComponent } from './json-viewer/json-viewer.component';
import { Base64EncodeComponent } from './base64-encode/base64-encode.component';
import { Base64DecodeComponent } from './base64-decode/base64-decode.component';
import { NgxDiffModule } from 'ngx-diff';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    JwtDecoderComponent,
    JsonFormatterComponent,
    JsonDiffComponent,
    JsonViewerComponent,
    Base64EncodeComponent,
    Base64DecodeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxJsonViewerModule,
    NgxDiffModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
