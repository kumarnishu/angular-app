import { Component } from '@angular/core';
import { EmployeeDialogsComponent } from 'src/app/components/dialogs/employee-dialogs/employee-dialogs.component';
import { EmployeeFormsComponent } from 'src/app/components/forms/employee-forms/employee-forms.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone:true,
  imports:[EmployeeDialogsComponent,EmployeeFormsComponent]
})
export class MainComponent {

}
