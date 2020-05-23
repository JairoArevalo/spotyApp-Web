import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { SearchTrackComponent } from './components/search-track/search-track.component';
import { AlbumSearchTrackComponent } from './components/album-search-track/album-search-track.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'searchTrack', component: SearchTrackComponent },
  { path: '', component: HomeComponent},
  { path: 'artist/:id', component: ArtistaComponent},
  { path: 'albumTrackSearch/:idAlbum/:idArtista', component: AlbumSearchTrackComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
