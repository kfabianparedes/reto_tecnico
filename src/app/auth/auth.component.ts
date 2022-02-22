import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AlbumService } from '../services/album.service';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  logo_inicio: string = '../../assets/img/foxbel-music-icon@3x.png';
  logo_mouse_over: string = '../../assets/img/foxbel-music-white-icon@3x.png';
  logo_mouse_out: string = '../../assets/img/foxbel-music-icon@3x.png';


  public busqueda: string = '';
  public usuario: string = '';
  private token: string = '';
  constructor(
    private storageService: StorageService,
    private route:ActivatedRoute, 
    private router: Router,
    private usuarioService: UsuarioService,
    private authService: AuthService,
    private _albumService: AlbumService
  ) {

  }
  ngOnInit(): void {
    this.storageService.clear();
    this._guardarTokenDeAutorizacion();
  }

  public inicioSesion():void{
    window.location.href = this.authService.AuthSession();
  }

  private _guardarTokenDeAutorizacion(): void {
    this._obtenerCredenciales().then(
      (data: any)=>{
        console.log('token');
        console.log(data);
        this.storageService.setString('access_token',data);
        this.usuarioService.obtenerAccessToken(data);
        this.router.navigate(['home']);
      }
    ).catch(()=>{
        console.log('no hay token');
        this.router.navigate(['']);
      }
    )
    
  }

  private _obtenerCredenciales() : Promise<string>{
    const promise = new Promise<string>((resolve, reject) => {
      this.token = JSON.parse(JSON.stringify(this.route.snapshot.fragment?.split('&')[0].split('=')[1])) || '';
      if(this.token.length>0)
        resolve(this.token);
      else
        reject();
    });

    return promise;
  }
}
