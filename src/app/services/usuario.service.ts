import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  httpHeaders={
    headers : new HttpHeaders({
      'Content-Type': 'application/json' ,
      'Access-Control-Allow-Origin':'*',
    })
  };

  constructor(private http: HttpClient) { }

  obtenerInformacionDeUsuario():Observable<any>{
    const url = environment.url_backend + ``;
    return this.http.get<any>(url,this.httpHeaders).pipe(retry(2));
  }
}
