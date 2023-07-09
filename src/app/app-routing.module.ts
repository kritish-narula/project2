import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContactComponent } from './layout/contact/contact.component';
import { ShopComponent } from './layout/shop/shop.component';
import { CheckoutComponent } from './layout/checkout/checkout.component';
import { ShirtsComponent } from './layout/shirts/shirts.component';
import { JacketsComponent } from './layout/jackets/jackets.component';
import { JeansComponent } from './layout/jeans/jeans.component';
import { CartComponent } from './layout/cart/cart.component';
import { LoginComponent } from './layout/login/login.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/layout/login',pathMatch:'full'
  },
  {
    path:'layout',component:LayoutComponent,
    children:[
      {
        path:'home',component:HomeComponent
      },
      {
        path:'header',component:HeaderComponent
      },
      {
        path:'footer',component:FooterComponent
      },
      {
        path:'contact',component:ContactComponent
      },
      {
        path:'shop',component:ShopComponent
      },
      {
        path:'checkout',component:CheckoutComponent 
      },
      {
        path:'shirts',component:ShirtsComponent
      },
      {
        path:'jackets',component:JacketsComponent
      },
      {
        path:'jeans',component:JeansComponent
      },
      {
        path:'cart',component:CartComponent
      },
      {
        path:'login',component:LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
