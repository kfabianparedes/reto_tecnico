import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = 'https://connect.deezer.com/oauth/access_token.php?';
  APP_ID: number = 528362;
  APP_SECRET: string = '6b5fc9b7735b0044259043b602ce758f';
  httpHeaders={
    headers : new HttpHeaders({
      'Content-Type': 'application/json' ,
      'Access-Control-Allow-Origin':'*',
    })
  };

  constructor(private http: HttpClient) { }

  AuthSession(CODE:string): Observable<any>{
    console.log(CODE);
    const url = this.url + `app_id=${this.APP_ID}&secret=${this.APP_SECRET}&code=${CODE}`;
    console.log(url);
    return this.http.get<any>(url,this.httpHeaders);
  }
}
