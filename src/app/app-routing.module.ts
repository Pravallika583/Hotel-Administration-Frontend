import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AddMovieComponent } from './component/add-movie/add-movie.component';
import { AddRoomdetailsComponent } from './component/add-roomdetails/add-roomdetails.component';
import { BookingHistoryComponent } from './component/booking-history/booking-history.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PaymentComponent } from './component/payment/payment.component';
import { RegisterComponent } from './component/register/register.component';
import { RoomBookingComponent } from './component/room-booking/room-booking.component';
import { RouterGaurdService } from './service/router-gaurd.service';
import { InventoryComponent } from './component/inventory/inventory.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent} ,
  { path: 'add', component: AddRoomdetailsComponent },
  { path: 'edit/:id', component: AddRoomdetailsComponent},
  { path: 'register', component: RegisterComponent },
  { path:'room-booking/:id', component:RoomBookingComponent ,canActivate: [RouterGaurdService]},
  { path:'payment', component:PaymentComponent},
  { path:'bookings', component:BookingHistoryComponent},
  {path:'inventory',component:InventoryComponent}
  // { path:'userhistory', component:BookingHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
