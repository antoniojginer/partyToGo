import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage {
  loginForm: FormGroup;
  validation_messages = {
    email: [
      {
        type: "required",
        message: "El email es un campo es requerido",
      },
      {
        type: "pattern",
        message: "Debes colocar un email válido",
      },
    ],
    password: [
      {
        type: "required",
        message: "La contraseña es un campo es requerido",
      },
      {
        type: "minlength",
        message: "La contraseña debe tener al menos 5 caracteres",
      },
    ],
  };
  constructor(
    private formBuilder: FormBuilder,
    private navController: NavController
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
    });
  }

  loginUser() {
    this.navController.navigateForward('/');
  }

  goToRegister() {
    this.navController.navigateForward('/register');
  }
}
