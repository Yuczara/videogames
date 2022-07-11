import { Component, OnInit } from '@angular/core';
import { VideojuegoService } from 'src/app/services/videojuego.service';

@Component({
  selector: 'app-listar-videojuegos',
  templateUrl: './listar-videojuegos.component.html',
  styleUrls: ['./listar-videojuegos.component.css']
})
export class ListarVideojuegosComponent implements OnInit {

  VideoJuegos: any = [];

  constructor(private videoJuegoService: VideojuegoService) {
    this.getVideojuegos();
    }

  ngOnInit(): void {
  }


  getVideojuegos(){
    this.videoJuegoService.getVideojuegos().subscribe((data) =>{
      this.VideoJuegos = data;
    })
  }

  //método para elimiar un empleado
  eliminarVideoJuego(videojuego, index){
    if(window.confirm('¿Estás seguro que lo deseas borrar?')){
      this.videoJuegoService.deleteVideojuego(videojuego._id).subscribe((data) =>{
        this.VideoJuegos.splice(index,1);
      })
    }
  }

}


