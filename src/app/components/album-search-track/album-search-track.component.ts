import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-album-search-track',
  templateUrl: './album-search-track.component.html',
  styleUrls: ['./album-search-track.component.css']
})
export class AlbumSearchTrackComponent implements OnInit {
  artista:any = {}
  loading:boolean
  tracksAlbum:any[] = []
  constructor(private activedRoute: ActivatedRoute, private spotifyService: SpotifyService) { 
    this.loading = true
    this.activedRoute.params.subscribe( (datos)=>{
      this.getArtista(datos['idArtista'])
      this.getTracks(datos['idAlbum'])
      

    })
  }

  ngOnInit(): void {
  }


  getArtista(id: string){
    this.loading = true
    this.spotifyService.getArtista(id).subscribe((aritstaRecibido)=>{
      this.artista = aritstaRecibido
      this.loading = false
    }) 
  }


  getTracks(id:string){
    this.spotifyService.getTracksAlbum(id).subscribe((topTracksRecibidos)=>{
      this.tracksAlbum = topTracksRecibidos
      console.log(this.tracksAlbum)
    })
  }


}
