import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/models/videojuego';
import { Router, ActivatedRoute } from '@angular/router';
import { VideojuegoService } from 'src/app/services/videojuego.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-videojuego',
  templateUrl: './editar-videojuego.component.html',
  styleUrls: ['./editar-videojuego.component.css']
})
export class EditarVideojuegoComponent implements OnInit {

  enviado=false;
  editForm:FormGroup;
  videojuegoTipo:any=['Arcade', 'Accion', 'Estrategia', 'Simulación', 'Otro'];
  videojuegoData: Videojuego[];

  constructor(
    public formBuilder: FormBuilder,
    private router:Router,
    private videojuegoService: VideojuegoService,
    private actRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.mainForm();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getVideojuego(id);
    this.editForm=this.formBuilder.group({
      titulo: ['',[Validators.required]],
      clasificacion: ['',[Validators.required]],
      anio: ['',[Validators.required,Validators.pattern]],
      descripcion: ['',Validators.required],
      image:['']
    })
  }

  mainForm(){
    this.editForm = this.formBuilder.group({
    titulo: ['',[Validators.required]],
    clasificacion: ['',[Validators.required]],
    anio: ['',[Validators.required,Validators.pattern]],
    descripcion: ['',Validators.required],
    image:['']
       });
     }

  actualizarTipo(d){
    this.editForm.get('clasificacion').setValue(d,{
      onlySelf: true,
    });
  }

  get myForm(){
    return this.editForm.controls;
  }

  getVideojuego(id){
    this.videojuegoService.getVideojuego(id).subscribe((data) => {
      this.editForm.setValue({
        titulo: data['titulo'],
        anio: data['anio'],
        descripcion: data['descripcion'],
        clasificacion: data['clasificacion'],
        image: data['image']
      });
    });
  }

  onSubmit(){
    this.enviado = true
    if(!this.editForm.valid){
      return false;
    }else{
      if(window.confirm('¿Estás seguro que deseas modificar?')){
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.videojuegoService.updateVideojuego(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/listar-videojuegos');
            console.log('Se actualizó correctamente');
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
    }
  }

}
