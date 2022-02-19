import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  logo_inicio: string = '../../assets/img/foxbel-music-icon@3x.png';
  logo_mouse_over: string = '../../assets/img/foxbel-music-white-icon@3x.png';
  logo_mouse_out: string = '../../assets/img/foxbel-music-icon@3x.png';

  constructor() { }

  public url: string = 'https://connect.deezer.com/oauth/auth.php';
  private APP_ID: number = 528362;
  private REDIRECT_URI: string = environment.url_frontend+'home';

  ngOnInit(): void {
    this.url = this.url + `?app_id=${this.APP_ID}&redirect_uri=${this.REDIRECT_URI}&perms=basic_access,email`;
    console.log(this.url);
  }

  public inicioSesion():void{
    window.location.href = this.url;
  }

}
