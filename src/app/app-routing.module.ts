import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocolioComponent } from './cocolio/cocolio.component';
import { HomeComponent } from './home/home.component'



const routes: Routes = [
  { path: 'cocolio', component: CocolioComponent },
  { path: '', component: HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
