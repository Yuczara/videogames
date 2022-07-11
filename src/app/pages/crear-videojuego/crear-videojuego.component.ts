import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideojuegoService } from 'src/app/services/videojuego.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-videojuego',
  templateUrl: './crear-videojuego.component.html',
  styleUrls: ['./crear-videojuego.component.css']
})

export class CrearVideojuegoComponent implements OnInit {

  videojuegoForm: FormGroup;
  enviado = false;
  videojuegoTipo:any = [
    'Arcade', 'Accion', 'Estrategia', 'Simulación', 'Otro'
  ]

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private videojuegoService: VideojuegoService
  ) {
    this.mainForm();
   }

  ngOnInit(): void {
  }

  mainForm(){
    this.videojuegoForm = this.formBuilder.group({
      titulo: ['',[Validators.required]],
      clasificacion: ['',[Validators.required]],
      anio: ['',[Validators.required,Validators.pattern]],
      descripcion: ['',Validators.required],
      image:['']
    });
  }

  actualizarTipo(d){
    this.videojuegoForm.get('clasificacion').setValue(d, {
      onlySelf: true,
    });
  }

  get myForm(){
    return this.videojuegoForm.controls;
  }
  onSubmit(){
    this.enviado = true;
    if(!this.videojuegoForm.valid){
      return false;
    }else{
      return this.videojuegoService.agregarVideojuego(this.videojuegoForm.value).subscribe({
        complete: () => {
          console.log('Video Juego agregado correctamente'),
          this.ngZone.run(() => this.router.navigateByUrl('/listar-videojuegos'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }


}
