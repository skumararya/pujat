import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutTempleComponent } from './about-temple/about-temple.component';
import { HomeComponent } from './home/home.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
const routes: Routes = [
  
     {path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
     { path: 'abouttemple', component: AboutTempleComponent,  children: [
      {path: 'login', component: LoginComponent, outlet: 'login1'},
      {path: 'home', component: HomeComponent},
    ]
    
    },
    {path: 'bookindetail', component: BookingDetailComponent},
    {path: 'home', component: HomeComponent},
     { path: '**', redirectTo: '/login' }  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
