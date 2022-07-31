import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BillComponent } from './bill/bill.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AdminComponent,
    RegisterComponent,
    MainpageComponent,
    DashboardComponent,
    ProductinfoComponent,
    CheckoutComponent,
    BillComponent,
    UserloginComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
