import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  httpHeaders={
    headers : new HttpHeaders({
      'Content-Type': 'application/json' ,
      'Access-Control-Allow-Origin':'*',
    })
  };

  constructor(private http: HttpClient) { }
  listarAlbumesPorNombre(busqueda?:string):Observable<any>{
    const url = environment.url_backend + `search?q=album:"${busqueda}"`;
    return this.http.get<any>(url,this.httpHeaders).pipe(retry(2));
  }
}
