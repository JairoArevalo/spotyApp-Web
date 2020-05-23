import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search-track',
  templateUrl: './search-track.component.html',
  styleUrls: ['./search-track.component.css']
})
export class SearchTrackComponent implements OnInit {
  loading:boolean
  soundTracks:any[]=[]
  constructor(private spotifyService: SpotifyService) {

   }

  ngOnInit(): void {
  }

  buscar(termino){
    this.loading = true
    this.spotifyService.getTracks(termino).subscribe((datos:any)=>{
      this.soundTracks = datos
      console.log(datos)
      this.loading = false
      
    })
  }
}
