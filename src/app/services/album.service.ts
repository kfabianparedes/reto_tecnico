import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';
import { AuthService } from './auth.service';
import { Album, Albums } from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  
  public albumBuscado!: Observable<Album>;

  httpHeaders={
    headers : new HttpHeaders({
      'Content-Type': 'application/json' ,
      'Access-Control-Allow-Origin':'*',
    })
  };

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private authService: AuthService
  ) { }
  
  listarMisAlbumes():Observable<Albums>{
    const url = `api/user/${this.storageService.getString('user_id')}/albums`;
    return this.http.get<Albums>(url,this.httpHeaders).pipe(retry(2));
  }

  listarAlbumPorNombre(busqueda?:string){
    const url = `api/search?q=album:"${busqueda}"`;
    return this.albumBuscado = this.http.get<Album>(url,this.httpHeaders).pipe(retry(2));
  }
  primerAlbumInfo(album_id: number):Observable<Album> {
    const url =`api/album/${album_id}`;
    return this.http.get<Album>(url,this.httpHeaders).pipe(retry(2));
  }
}
