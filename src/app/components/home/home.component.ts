import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nuevasCanciones:any[] =[]
  loading:boolean
  constructor( private spotifyService: SpotifyService) { 
    this.loading = true
    this.spotifyService.getnewReleases().subscribe((datosRecibidos:any) =>{
      this.nuevasCanciones= datosRecibidos
      this.loading = false
    })
    
    
  }

  ngOnInit(): void {
  }

}
