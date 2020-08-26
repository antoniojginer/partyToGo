import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage {
  registerForm: FormGroup;

  validation_messages = {
    name: [
      {
        type: "required",
        message: "El nombre es un campo es requerido",
      },
      {
        type: "minlength",
        message: "El nombre debe tener al menos 5 caracteres",
      },
    ],
    surname: [
      {
        type: "required",
        message: "El apellido es un campo es requerido",
      },
      {
        type: "minlength",
        message: "El apellido debe tener al menos 5 caracteres",
      }
    ],
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
    confirmPassword: [
      {
        type: "required",
        message: "La confirmación de la contraseña es un campo es requerido",
      },
      {
        type: "minlength",
        message: "La confirmación de la contraseña debe tener al menos 5 caracteres",
      }
    ],
  };

  constructor(
    private formBuilder: FormBuilder,
    private navController: NavController
  ) {
    this.registerForm = this.formBuilder.group({
      name: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
      surname: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
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
      confirmPassword: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
    });
  }

  backToLogin() {
    this.navController.navigateBack("/login");
  }

  submit() {
    this.navController.navigateForward("/login");
  }
}
