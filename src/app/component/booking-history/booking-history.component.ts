import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { roombooking } from 'src/app/model/roombooking';

import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css'],
})
export class BookingHistoryComponent implements OnInit {
  roombookings!: roombooking[];
  total: number = 0;
  arr1: roombooking[][] = [];
  arr2: roombooking[] = [];
  arr3: number[] = [];

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit(): void {

    
    const isAdmin = localStorage.getItem("isAdmin");
    console.log('isAdmin in bh: ', isAdmin);
    if (!isAdmin || isAdmin == "false") {
      this.getuserbooking();
      
    } else {
      this.getAllbookings();
    }
   
  }

  getAllbookings() {
    this.bookingService.getAllBookings().subscribe({
      next: (response: any) => {
        console.log(response);

        this.roombookings = response;
        this.roombookings.forEach((booking) => {
          if (this.arr2.length === 0) {
            console.log(this.arr2.length);
            this.arr2.push(booking);
            this.total+=booking.price*booking.noOfRooms;
          } else if (this.arr2[0].roomid === booking.roomid) {
            this.arr2.push(booking);
            this.total+=booking.price*booking.noOfRooms;
          } else {
            this.arr1.push(this.arr2);
            this.arr3.push(this.total);
            this.arr2 = [];
            this.total = 0;
            this.arr2.push(booking);
            this.total+=booking.price*booking.noOfRooms;
          }
        });
        this.arr1.push(this.arr2);
        this.arr3.push(this.total);
        console.log(this.arr1);
      },
      error: (error: any) => console.log(error),
    });
  }


  getuserbooking() {
    const userId = localStorage.getItem("id") || 0;
    this.bookingService.getuserbooking(+userId).subscribe({
      next: (response: any) => {
        console.log(response);

        this.roombookings = response;
      },
      error: (error: any) => console.log(error),
    });
  }
}
