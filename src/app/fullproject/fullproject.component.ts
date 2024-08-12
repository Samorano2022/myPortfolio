import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { ExpertComponent } from '../expert/expert.component';
import { ExtentedComponent } from '../extented/extented.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fullproject',
  standalone: true,
  imports: [ProfileComponent, ExpertComponent, ExtentedComponent],
  templateUrl: './fullproject.component.html',
  styleUrl: './fullproject.component.css'
})
export class FullprojectComponent {
  constructor(private router: Router) {}
  onConnect() {
    this.router.navigateByUrl('about');
  } 
  onExpertise() {
    this.router.navigateByUrl('expertise');
  } 
  onProject() {
    this.router.navigateByUrl('project');
  } 
  onResume() {
    this.router.navigateByUrl('resume');
  }
}
