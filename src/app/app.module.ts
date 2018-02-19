import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GhettyImagesComponent } from './ghetty-images/ghetty-images.component';
import { TweetsComponent } from './tweets/tweets.component';
import { LinksServiceService } from './links-service.service';
import { LinkButtonsComponent } from './link-buttons/link-buttons.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';



//routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

//put imported modules here
@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    AppComponent,
    GhettyImagesComponent,
    TweetsComponent,
    LinkButtonsComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot (appRoutes, {enableTracing: true }),
    HttpClientModule,
    BrowserModule
  ],
  providers: [LinksServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
