import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BillComponent } from './bill/bill.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path:'',redirectTo:'index',pathMatch: 'full'},
  {path:'product-list', component: ProductListComponent},
  {path:'register', component: RegisterComponent},
  {path:'mainpage', component: MainpageComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'admin', component:AdminComponent},
  {path:'productinfo', component:ProductinfoComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'bill', component:BillComponent},
  {path:'userlogin', component:UserloginComponent},
  {path:'index', component:IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
