import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GhettyImagesComponent } from './ghetty-images/ghetty-images.component';
import { TweetsComponent } from './tweets/tweets.component';


//put imported modules here
@NgModule({
  declarations: [
    AppComponent,
    GhettyImagesComponent,
    TweetsComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
