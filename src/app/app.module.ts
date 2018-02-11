import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GhettyImagesComponent } from './ghetty-images/ghetty-images.component';



@NgModule({
  declarations: [
    AppComponent,
    GhettyImagesComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
