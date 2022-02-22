import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Track, Tracks } from '../models/track.model';
import { AuthService } from './auth.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  httpHeaders={
    headers : new HttpHeaders({
      'Content-Type': 'application/json' ,
      'Access-Control-Allow-Origin':'*',
    })
  };
  constructor(
    private http: HttpClient
  ) { }

  listarTracksPorAlbum( album_id : number ) : Observable<Tracks>{
    const url = `api/album/${album_id}/tracks`;
    return this.http.get<Tracks>(url,this.httpHeaders).pipe(retry(2));
  }

  obtenerTrackPorId( track_id : number ): Observable<Track>{
    const url = `api/track/${track_id}`;
    return this.http.get<Track>(url,this.httpHeaders).pipe(retry(2));
  }
}