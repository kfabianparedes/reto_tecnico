import { HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { AlbumService } from 'src/app/services/album.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private token: Params = new HttpParams();
  public busqueda: string = '';

  constructor(
    private route:ActivatedRoute, 
    private authService:AuthService,
    private albumService: AlbumService  
  ) { }

  ngOnInit(): void {

    this.guardarTokenDeAutorizacion();
    this.listarAlbumes();
  }

  private guardarTokenDeAutorizacion():void {
    this.token = this.route.snapshot.queryParams;
    localStorage.setItem('tkn_code_deezer',this.token['code']);
    // this.authService.AuthSession(this.token['code']).subscribe(data=>console.log(data));
  }

  private listarAlbumes():void{
    
    this.albumService.listarAlbumesPorNombre(this.busqueda).subscribe(data=>console.log(data));
  }

}
