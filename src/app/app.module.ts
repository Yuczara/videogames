import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearVideojuegoComponent } from './pages/crear-videojuego/crear-videojuego.component';
import { ListarVideojuegosComponent } from './pages/listar-videojuegos/listar-videojuegos.component';
import { EditarVideojuegoComponent } from './pages/editar-videojuego/editar-videojuego.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VideojuegoService } from './services/videojuego.service';
import { AboutComponent } from './pages/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearVideojuegoComponent,
    ListarVideojuegosComponent,
    EditarVideojuegoComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [VideojuegoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
