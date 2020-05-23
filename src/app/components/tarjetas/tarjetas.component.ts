import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  @Input() items: any[] = []

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  verArtista( item ){
    let artistaId;
    if (item.type  === 'artist') {
      artistaId = item.id
    } else {
      artistaId = item.artists[0].id
    }
    this.router.navigate(['/artist', artistaId])
  }

  verCancionAlbum(item){
   let albumId;
   albumId = item.album['id']
   let artistaId
   if (item.type  === 'artist') {
    artistaId = item.id
  } else {
    artistaId = item.artists[0].id
  }
   this.router.navigate(['/albumTrackSearch', albumId, artistaId])
  }
}
