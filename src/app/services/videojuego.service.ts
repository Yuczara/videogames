import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {

  //baseUri: string = 'http://localhost:4000/api';
  baseUri: string = 'https://videogamesds02.herokuapp.com/api/';
 
  headers = new HttpHeaders().set('Content-Type' , 'application/json');

  constructor(private http:HttpClient) { }

  agregarVideojuego(data):Observable<any>{
    let url = `${this.baseUri}/create`;
    return this.http.post(url,data).pipe(catchError(this.errorMgmt));
  }


  getVideojuegos(){
    let url = `${this.baseUri}/videojuegos`;
    return this.http.get(url);
  }

  getVideojuego(id):Observable<any>{
    let url = `${this.baseUri}/videojuego/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res:Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    )
  }

  updateVideojuego(id,data):Observable<any>{
    let url = `${this.baseUri}/update/${id}`;
    return this.http.put(url,data,{headers: this.headers}).pipe(
      catchError(this.errorMgmt)
    );
  }

  deleteVideojuego(id): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }

  //manejador de errores
  errorMgmt(error:HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      //obtenermos el error del lado del cliente
      errorMessage = error.error.message;
    }else{
      //obtenemos el error del lado del servidor
    errorMessage = `Código de error: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
 
}
