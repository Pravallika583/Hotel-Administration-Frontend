import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewRoom } from 'src/app/model/newRoom';
import { roombooking } from 'src/app/model/roombooking';
import { NewModel } from 'src/app/model/newModel';
import { BookingService } from 'src/app/service/booking.service';
import { RoomService } from 'src/app/service/room.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.css'],
})
export class RoomBookingComponent implements OnInit {
  id: number = 0;
  room!: NewRoom;
  roombooking: roombooking = {
    roomid: 0,
    roomname: '',
    noOfRooms: 1,
    price: 150,
    timings: '9.00 PM',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private roomService: RoomService,
    private bookingService: BookingService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.roomService.getRoomById(this.id).subscribe({
      next: (response: any) => {
        this.room = response;
        console.log(response);
        this.roombooking.roomname = this.room.roomname;
        this.roombooking.price = this.room.price;
        console.log(this.roombooking);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  payment() {
    
  }

  addbooking() {
    this.notificationService.showNotification('Successfully added!');
    console.log(this.roombooking);
    const userid = localStorage.getItem('id') || 0;
    this.bookingService.addbooking(this.roombooking,  +userid).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
