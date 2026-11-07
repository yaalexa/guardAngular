
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  usuario = '';
  rol = '';
  mensaje = '';

  constructor(
    private store: Store<{ auth: any }>
  ) {

    this.store.select(estado => estado.auth).subscribe(estado => {
      this.usuario = estado.usuario;
      this.rol = estado.rol;
      this.mensaje = estado.mensaje;
    });

  }
}
