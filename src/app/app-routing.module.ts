import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JwtDecoderComponent } from './jwt-decoder/jwt-decoder.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { JsonDiffComponent } from './json-diff/json-diff.component';
import { Base64DecodeComponent } from './base64-decode/base64-decode.component';
import { Base64EncodeComponent } from './base64-encode/base64-encode.component';
import { JsonViewerComponent } from './json-viewer/json-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'jwt-decoder',
    component: JwtDecoderComponent,
    data: { title: 'Decode JWT' }
  },
  {
    path: 'json-viewer',
    component: JsonViewerComponent,
    data: { title: 'Format Json' }
  },
  {
    path: 'json-formatter',
    component: JsonFormatterComponent,
    data: { title: 'Format Json' }
  },
  {
    path: 'json-diff',
    component: JsonDiffComponent,
    data: { title: 'Json diff' }
  },
  {
    path: 'b64-encode',
    component: Base64EncodeComponent,
    data: { title: 'Base64 Encode' }
  },
  {
    path: 'b64-decode',
    component: Base64DecodeComponent,
    data: { title: 'Base64 Decode' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
