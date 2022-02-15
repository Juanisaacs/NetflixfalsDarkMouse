import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { FilmComponent } from './features/home/components/film/film.component';
import { HeroComponent } from './features/home/components/hero/hero.component';
import { MainComponent } from './features/home/components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmComponent,
    HeroComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
