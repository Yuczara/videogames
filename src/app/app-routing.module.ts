import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearVideojuegoComponent } from './pages/crear-videojuego/crear-videojuego.component';
import { ListarVideojuegosComponent } from './pages/listar-videojuegos/listar-videojuegos.component';
import { EditarVideojuegoComponent } from './pages/editar-videojuego/editar-videojuego.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: 'crear-videojuego'},
	{path: 'crear-videojuego', component: CrearVideojuegoComponent },
	{path: 'editar-videojuego/:id', component: EditarVideojuegoComponent },
	{path: 'listar-videojuegos', component: ListarVideojuegosComponent },
  {path: 'about', component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
