import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputsComponent } from '../../components/primary-inputs/primary-inputs.component';
import { HeaderComponent } from "../../components/header/header.component";
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputsComponent,
    HeaderComponent
],
  providers:[
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor( 
    private router: Router,
    private loginService: LoginService,
    private toastrService: ToastrService

    ){
    this.loginForm = new FormGroup({
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.toastrService.success("Login feito com sucesso!"),
      error: () => this.toastrService.error("Erro ao tentar realizar login!")
    })
  }

  navigate(){
    this.router.navigate(["signup"])
  }

}
