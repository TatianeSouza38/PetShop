import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FooterComponent } from './home/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CarComponent } from './products/car/car.component';
import { BodyComponent } from './products/body/body.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
     AppComponent,
     NavBarComponent,
     SearchBarComponent,
     FooterComponent,
     PageNotFoundComponent,
     ProductsComponent,
     HomeComponent,
     LoginComponent,
     CarComponent,
     BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
