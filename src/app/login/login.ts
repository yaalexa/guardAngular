
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from '../service';
import { login as loginAction } from '../action';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  usuario = {
    username: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private store: Store,
    private router:Router
  ) {}

  login() {
    this.authService.login(this.usuario).subscribe({

      next: (respuesta: any) => {
        console.log(respuesta);

        // Guardar los datos en el estado de NgRx
        this.store.dispatch(loginAction({
          usuario: respuesta.usuario,
          rol: respuesta.rol,
          token: respuesta.token,
          refresh: respuesta.refresh ?? '',
          mensaje: respuesta.mensaje
        }));

         this.router.navigate(['/dashboard']);
      },

      error: (error) => {
        console.error(error);
        alert('Usuario o contraseña incorrectos');
      }

    });
  }
}
