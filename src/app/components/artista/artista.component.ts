import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  artista:any = {}
  loading:boolean = true
  topTracks:any[] = []
  constructor( private activatedRoute: ActivatedRoute, private spotifyService : SpotifyService) {
    this.loading = true 
    this.activatedRoute.params.subscribe((idRecibido)=>{
      this.getArtista(idRecibido['id'])
      this.getTopTracks(idRecibido['id'])
      
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

  getTopTracks(id:string){
    this.spotifyService.getTopTracks(id).subscribe((topTracksRecibidos)=>{
      this.topTracks = topTracksRecibidos
      console.log(this.topTracks)
    })
  }

}
