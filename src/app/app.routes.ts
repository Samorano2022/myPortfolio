import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { FullprojectComponent } from './fullproject/fullproject.component';
import { ProjbodyComponent } from './projbody/projbody.component';
import { ProfileComponent } from './profile/profile.component';
import { ExpertComponent } from './expert/expert.component';
import { ExtentedComponent } from './extented/extented.component';
import { ProjectOneComponent } from './project-one/project-one.component';

export const routes: Routes = [
    { path: '',  redirectTo: '/home', pathMatch: 'full' },
   // { path: 'home', component: ProfileComponent},
    { path: 'home', component: FullprojectComponent},
    { path:'about', component: ProfileComponent},
    { path:'expertise', component: ExpertComponent},
    { path:'project', component: ProjbodyComponent},
    { path:'extend', component: ExtentedComponent}
    //{ path: '**', component: PageNotFoundComponent },
      // Wildcard route for a 404 page
];
