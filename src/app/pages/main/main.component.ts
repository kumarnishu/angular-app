import { Component } from '@angular/core';
import { SignupFormComponent } from 'src/app/components/forms/auth/signup-form/signup-form.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone:true,
  imports:[SignupFormComponent]
})
export class MainComponent {

}
