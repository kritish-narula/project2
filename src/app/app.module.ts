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
import { LoginComponent } from './layout/login/login.component';
import { RegisterComponent } from './layout/register/register.component';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { AdminheaderComponent } from './adminlayout/adminheader/adminheader.component';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdminhomeComponent } from './adminlayout/adminhome/adminhome.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
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
    RegisterComponent,
    AdminlayoutComponent,
    AdminheaderComponent,
    AdminhomeComponent
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
