import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public usuario: string = '';
  public busqueda: string = '';
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
    this._obtenerCredenciales();
  }

  public busquedaAlbumPorNombre($event : any): void{
    console.log($event);
    this.busqueda = $event;
    this._albumService.listarAlbumPorNombre(this.busqueda);
    
  }

  private _obtenerCredenciales(): void{
    this.usuarioService.obtenerInformacionDeUsuario().subscribe(
      (data:any)=>{
        console.log(data);
        if((this.storageService.getString('user_id')== undefined || 
          !this.storageService.getString('user_id')) ||
          (this.storageService.getString('usur_names') ==undefined || 
          !this.storageService.getString('usur_names'))
          ){
            this.storageService.setString('user_id',data.id);
            this.storageService.setString('usur_names',data.name);
          }
          this.router.navigate(['home/mis-albumes'])
      }
    );
  }
}
