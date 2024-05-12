import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { ServicesComponent } from './views/services/services.component';
import { ContactComponent } from './views/contact/contact.component';
import { PageComponent } from './views/page/page.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
