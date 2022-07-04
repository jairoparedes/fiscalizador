import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { BarcodeFormat } from '@zxing/library';
import { EpidemiologicaService } from 'src/app/epidemiologica.service';
import { epidemiologica } from 'src/app/interfaces/epidemilogica.interface';

@Component({
  selector: 'app-fiscalizador',
  templateUrl: './fiscalizador.component.html',
  styleUrls: ['./fiscalizador.component.scss'],
})
export class FiscalizadorComponent implements OnInit {
  textoDeInput : string = '';
  title = 'fiscalizador';
  allowedFormats = [BarcodeFormat.QR_CODE, BarcodeFormat.PDF_417 /*, ...*/];
  qrResultString: string = '';
  today = new Date();
  public toggleFlag = false;
  public showDropdown() {
    this.toggleFlag = !this.toggleFlag;
  }
  showSituacion: boolean = false;
  passed: boolean = true;
  articulos: any;
  mensaje: string = '';
  rasultados: epidemiologica[] = [];
  art = {
    codigo: null,
    descripcion: null,
    precio: null,
  };

  constructor(
    private epidemiologicaService: EpidemiologicaService,
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit() {
    /* this.recuperarTodos(); */
  }

  /*   recuperarTodos() {
    this.epidemiologicaService.recuperarTodos().subscribe(result => this.articulos = result);
  }

  alta() {
    this.epidemiologicaService.alta(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  } */
  clearResult(): void {
    this.qrResultString = '';
  }
  onCodeResult(resultString: string) {
    console.log(resultString);
    resultString = resultString.replace('RUN=', '*');
    resultString = resultString.replace('&type=', '*');
    resultString = resultString.split('*')[1];
    this.qrResultString = resultString;
    this.obtenerSituacionEpi(resultString);
  }
  obtenerSituacionEpi(rut: string) {
    this.articulos = this.epidemiologicaService.obtenerSituacionEpi(rut);
    this.epidemiologicaService
      .obtenerSituacionEpi(rut)
      .subscribe((result: any) => {
        console.log('Response->', result['resultado']);

        const { resultado, mensaje } = result;
        this.rasultados = resultado;
        this.mensaje = mensaje;
        this.showSituacion = true;
        this.today = new Date();
        const newDate1 = new Date(this.rasultados[0].ultimo_dia_activo);
        console.log(newDate1);
        console.log(this.today);
        if (newDate1 <= this.today){
          this.passed = true;
        }
        if (newDate1 > this.today){
          this.passed = false;
        }
      });
  }

  obtenerSituacionEpiRut() {
    this.epidemiologicaService
    .obtenerSituacionEpi(this.textoDeInput)
    .subscribe((result : any ) => {
      console.log('Response->',result['resultado']);

      const { resultado, mensaje } = result;
      this.rasultados = resultado;
      this.mensaje = mensaje;
      this.showSituacion = true;
      this.today = new Date();
        const newDate1 = new Date(this.rasultados[0].ultimo_dia_activo);
        console.log(newDate1);
        console.log(this.today);
        if (newDate1 <= this.today){
          this.passed = true;
        }
        if (newDate1 > this.today){
          this.passed = false;
        }
      });
  }

  nuevalecturaQR() {
    this.showSituacion = false;
    this.textoDeInput ="";
  }

  /* modificacion() {
    this.epidemiologicaService.modificacion(this.art).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });    
  }
  
  seleccionar(codigo) {
    this.epidemiologicaService.seleccionar(codigo).subscribe(result => this.art = result[0]);
  }

  hayRegistros() {
    return true;
  }  */
}
