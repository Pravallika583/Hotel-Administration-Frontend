import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRoomdetailsComponent } from './component/add-roomdetails/add-roomdetails.component';
//import { AddMovieComponent } from './component/add-movie/add-movie.component';
import { BookingHistoryComponent } from './component/booking-history/booking-history.component';
import { CardComponent } from './component/card/card.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PaymentComponent } from './component/payment/payment.component';
import { RegisterComponent } from './component/register/register.component';
import { RoomBookingComponent } from './component/room-booking/room-booking.component';
import { NotificationComponent } from './component/notification/notification.component';
import { InventoryComponent } from './component/inventory/inventory.component';
// import { InventoryComponent } from './component/inventory/inventory.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    RoomBookingComponent,
    CardComponent,
    PaymentComponent,
    BookingHistoryComponent,
    AddRoomdetailsComponent,
    NotificationComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
