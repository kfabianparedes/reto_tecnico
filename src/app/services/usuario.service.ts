import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  public token = ``;
  public user_id = ``;
  public usur_names = ``;
  public access_token = '';

  httpHeaders={
    headers : new HttpHeaders({
      'Content-Type': '*/*' ,
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'mode': 'no-cors',
    })
  };
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  obtenerAccessToken(access_token : string ){
    console.log(access_token);
    this.token = `?access_token=${access_token}`;
  }

  setId(value: string){
    this.user_id = value;
  }
  setNames(value: string){
    this.usur_names = value;
  }
  obtenerInformacionDeUsuario():Observable<User>{
    if(this.token.length<=0)
      this.obtenerAccessToken(this.storageService.getString('access_token')!.toString());
    const url = 'api/user/me' + this.token; //environment.url_backend + 
    return this.http.get<User>(url,this.httpHeaders);//.pipe(retry(2));
  }


}
