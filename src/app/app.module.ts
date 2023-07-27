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
import { AdditemComponent } from './adminlayout/additem/additem.component';
import { UpdateitemComponent } from './adminlayout/updateitem/updateitem.component';
import { RemoveitemComponent } from './adminlayout/removeitem/removeitem.component';
import { DashboardComponent } from './adminlayout/dashboard/dashboard.component';
import { AddcategoryComponent } from './adminlayout/addcategory/addcategory.component';
import { ManagecategoryComponent } from './adminlayout/managecategory/managecategory.component';
import { UpdatecategoryComponent } from './adminlayout/updatecategory/updatecategory.component';
import { SleepwearComponent } from './layout/sleepwear/sleepwear.component';
import { SwimwearComponent } from './layout/swimwear/swimwear.component';
import { CoatsComponent } from './layout/coats/coats.component';
import { ShopdetailComponent } from './layout/shopdetail/shopdetail.component';
import { ManageitemComponent } from './adminlayout/manageitem/manageitem.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
import { RemovecategoryComponent } from './adminlayout/removecategory/removecategory.component';
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
    AdminhomeComponent,
    AdditemComponent,
    UpdateitemComponent,
    RemoveitemComponent,
    DashboardComponent,
    AddcategoryComponent,
    ManagecategoryComponent,
    UpdatecategoryComponent,
    SleepwearComponent,
    SwimwearComponent,
    CoatsComponent,
    ShopdetailComponent,
    ManageitemComponent,
    RemovecategoryComponent
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
