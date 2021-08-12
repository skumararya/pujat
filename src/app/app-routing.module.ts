import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutTempleComponent } from './about-temple/about-temple.component';
const routes: Routes = [
  
     {path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
     { path: 'abouttemple', component: AboutTempleComponent,  children: [
      {path: 'login', component: LoginComponent, outlet: 'login1'},
    ]
    
    },
     { path: '**', redirectTo: '/login' }  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
