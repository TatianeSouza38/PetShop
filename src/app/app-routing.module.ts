import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CarComponent } from './products/car/car.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'car', component: CarComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
