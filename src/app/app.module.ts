import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SectionComponent } from './home/section/section.component';
import { FooterComponent } from './home/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './products/main/main.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CarComponent } from './products/car/car.component';
import { FavComponent } from './products/fav/fav.component';

@NgModule({
  declarations: [
     AppComponent,
     NavBarComponent,
     SearchBarComponent,
     SectionComponent,
     FooterComponent,
     PageNotFoundComponent,
     MainComponent,
     ProductsComponent,
     HomeComponent,
     LoginComponent,
     CarComponent,
     FavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
