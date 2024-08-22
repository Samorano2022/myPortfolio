import { Component } from '@angular/core';
import { ExtentedComponent } from '../extented/extented.component';

@Component({
  selector: 'app-expert',
  standalone: true,
  imports: [ExtentedComponent],
  templateUrl: './expert.component.html',
  styleUrl: './expert.component.css'
})
export class ExpertComponent {

}
