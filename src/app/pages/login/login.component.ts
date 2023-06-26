import { Component } from '@angular/core';
import { LoginFormComponent } from 'src/app/components/forms/auth/login-form/login-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone:true,
  imports:[LoginFormComponent]
  
})
export class LoginComponent {

}
