import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    
  }

  getQuery( query:string){
    const url = `https://api.spotify.com/v1/${ query }`
    let headers = new HttpHeaders(
      {'Authorization': 'Bearer BQCbisck23miHt-sQmEBUROEK6kukPd2MrZrDNVSP-DAzWELEXheOQqHvy99rxqYfMbw3ST2IexyrXvX0gw'}
    ) 

    return this.http.get(url, {headers})
  }

  getnewReleases(){
   

    return  this.getQuery("browse/new-releases?limit=50").pipe(
      map( data => {
        return data['albums'].items
      })
    )

  }

  getArtistas(termino:string){
   
    return this.getQuery(`search?q=${ termino }&type=artist&limit=50&offset=0`).pipe(
      map( data => {
        return data['artists'].items
      })
    )
  }

  getTracks(termino:string){
    return this.getQuery(`search?q=${ termino }&type=track&limit=50&offset=0`).pipe(
      map( data =>{
        return data['tracks'].items
      })
    )
  }

  getTracksAlbum(id:string){
    return this.getQuery(`albums/${ id }/tracks?limit=50&offset=0`).pipe(
      map( (data:any) =>{
        return data.items
      })
    )
  }

  getArtista(id:string){
    return this.getQuery(`artists/${ id }`)
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${ id }/top-tracks?country=co`).pipe(
      map( data =>{
        return data['tracks']
      })
    )
  }
}


 // Codigo sin la funcion query
// getnewReleases(){
//   let headers = new HttpHeaders(
//     {'Authorization': 'Bearer BQBx0KSN_lBQOATnOcy79cOO543gDWAD-Mgvxuqcia3twof33knBL_eM4GVz8uodTwFEVmb-QBMjZWaNQjc' }
//   ) 
//   return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers}).pipe(
//     map( data => {
//       return data['albums'].items
//     })
//   )

// }

// getArtista(termino:string){
//   let headers = new HttpHeaders(
//     {'Authorization': 'Bearer BQBx0KSN_lBQOATnOcy79cOO543gDWAD-Mgvxuqcia3twof33knBL_eM4GVz8uodTwFEVmb-QBMjZWaNQjc' }
//   ) 
//   return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=50&offset=3`, {headers}).pipe(
//     map( data => {
//       return data['artists'].items
//     })
//   )
