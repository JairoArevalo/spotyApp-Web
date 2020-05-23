import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { from } from 'rxjs';
import { SpotifyService } from './services/spotify.service';
import { NoImagePipe } from './pipes/no-image.pipe';

import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/share/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { SearchTrackComponent } from './components/search-track/search-track.component';
import { AlbumSearchTrackComponent } from './components/album-search-track/album-search-track.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoImagePipe,
    TarjetasComponent,
    LoadingComponent,
    DomseguroPipe,
    SearchTrackComponent,
    AlbumSearchTrackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
    
  ],
  providers: [
    SpotifyService,
    
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
