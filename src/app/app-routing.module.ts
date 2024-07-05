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
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { AdminheaderComponent } from './adminlayout/adminheader/adminheader.component';
import { AdditemComponent } from './adminlayout/additem/additem.component';
import { UpdateitemComponent } from './adminlayout/updateitem/updateitem.component';
import { RemoveitemComponent } from './adminlayout/removeitem/removeitem.component';
import { AddcategoryComponent } from './adminlayout/addcategory/addcategory.component';
import { UpdatecategoryComponent } from './adminlayout/updatecategory/updatecategory.component';
import { ManagecategoryComponent } from './adminlayout/managecategory/managecategory.component';
import { DashboardComponent } from './adminlayout/dashboard/dashboard.component';
import { SleepwearComponent } from './layout/sleepwear/sleepwear.component';
import { SwimwearComponent } from './layout/swimwear/swimwear.component';
import { ShopdetailComponent } from './layout/shopdetail/shopdetail.component';
import { SportswearComponent } from './layout/sportswear/sportswear.component';
import { ManageitemComponent } from './adminlayout/manageitem/manageitem.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/layout/home',pathMatch:'full'
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
      },
      {
        path:'sleepwear',component:SleepwearComponent
      },
      {
        path:'swimwear',component:SwimwearComponent
      },
      {
        path:'shopdetail/:id',component:ShopdetailComponent
      },
      {
        path:'sportswear',component:SportswearComponent
      }
    ]  
  },
  {
    path:'adminlayout',component:AdminlayoutComponent,
    children:[
      {
        path:'login',component:LoginComponent
      },
      {
        path:'contact',component:ContactComponent
      },
      {
        path:'additem',component:AdditemComponent
      },
      {
        path:'updateitem',component:UpdateitemComponent
      },
      {
        path:'removeitem',component:RemoveitemComponent
      },
      {
        path:'addcategory',component:AddcategoryComponent
      },
      {
        path:'updatecategory/:id',component:UpdatecategoryComponent
      },
      {
        path:'managecategory',component:ManagecategoryComponent
      },
      {
        path:'dashboard',component:DashboardComponent
      },
      {
        path:'manageitem',component:ManageitemComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
