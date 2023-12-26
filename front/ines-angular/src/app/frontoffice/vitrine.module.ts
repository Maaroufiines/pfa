import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VitrineRoutingModule } from './vitrine-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
      FooterComponent,
      HeaderComponent,
      LayoutComponent,
      CartComponent,
      CheckoutComponent,
      HomeComponent,
      ProfileComponent

  ],
  imports: [
    CommonModule,
    VitrineRoutingModule,
    FormsModule
  ]
})
export class VitrineModule { }
