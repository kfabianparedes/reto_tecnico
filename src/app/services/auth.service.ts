import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { StorageService } from './storage.service';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpHeaders={
    headers : new HttpHeaders({
      'Content-Type': '*/*' ,
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'mode': 'no-cors',
    })
  };

  private url_auth: string = 'https://connect.deezer.com/oauth/auth.php';
  private APP_ID = 528362;
  private REDIRECT_URI: string = environment.url_frontend;
  private access_token: string = '';
  public token = `?access_token=`+ this.storageService.getString('access_token');
  
  constructor(private http: HttpClient,private storageService: StorageService,private usuarioService: UsuarioService) { }
  AuthSession(): string{
    this.url_auth = this.url_auth + `?app_id=${this.APP_ID}&redirect_uri=${this.REDIRECT_URI}&perms=basic_access,email&response_type=token`;
    return this.url_auth;
  }

  setToken(value: string): Observable<User> {
    if(this.access_token.length<=0){
      this.storageService.setString('access_token',value);
      this.access_token = value;
    }
    const url = 'api/user/me' + this.token; //environment.url_backend + 
    return this.http.get<User>(url,this.httpHeaders);
      /* this._obtenerInfoUsuario().subscribe(
        (data: any)=>{
          console.log(data);
          this.storageService.setString('user_id',data.id);
          this.storageService.setString('usur_names',data.name);
        }
      ); */
  }

  getToken():string{
    return this.access_token;
  }

  private _obtenerInfoUsuario(): Observable<User> {
    const url = 'api/user/me' + this.token; //environment.url_backend + 
    return this.http.get<User>(url,this.httpHeaders);//.pipe(retry(2));
  }
}
