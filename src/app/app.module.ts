import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { ShopComponent } from './layout/shop/shop.component';
import { ContactComponent } from './layout/contact/contact.component';
import { CheckoutComponent } from './layout/checkout/checkout.component';
import { CartComponent } from './layout/cart/cart.component';
import { ShirtsComponent } from './layout/shirts/shirts.component';
import { JeansComponent } from './layout/jeans/jeans.component';
import { JacketsComponent } from './layout/jackets/jackets.component';
import { SportswearComponent } from './layout/sportswear/sportswear.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './layout/login/login.component';
import { RegisterComponent } from './layout/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    ContactComponent,
    CheckoutComponent,
    CartComponent,
    ShirtsComponent,
    JeansComponent,
    JacketsComponent,
    SportswearComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
