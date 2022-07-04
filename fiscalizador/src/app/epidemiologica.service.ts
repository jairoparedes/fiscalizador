import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpidemiologicaService {
  url='https://indexsoftwareltda.com/paneles/servicio/'; // disponer url servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}getEpiSituation_1_1.php`);
  }

  alta(articulo : string) {
    return this.http.post(`${this.url}getEpiSituation_1_1.php`, JSON.stringify(articulo));    
  }

  obtenerSituacionEpi(rut : string) {
    return this.http.get(`${this.url}getEpiSituation_1_1.php?rut=${rut}`);
  }
  seleccionar(codigo : number) {
    return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`);
  }

  modificacion(articulo : string) {
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(articulo));    
  }
}
