import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewRoom } from 'src/app/model/newRoom';
//import { NewMovie } from 'src/app/model/newMovie';
import { roombooking } from 'src/app/model/roombooking';
import { AuthService } from 'src/app/service/auth.service';
import { BookingService } from 'src/app/service/booking.service';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() newRoom!: NewRoom;
  count!: number;
  @Input() ticketbooking!: roombooking;
  isAdmin: boolean = false;

  constructor(
    private router: Router,
    private bookingService: BookingService,
    private roomService: RoomService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
  }
  // bookticket() {
  //   console.log(this.ticketbooking);
  //   this.ticketService.bookticket(this.ticketbooking).subscribe({
  //     next: (response: any) => {
  //       console.log();
  //     },
  //     error: (error: any) => {
  //       console.log(error);
  //     },
  //   });
  // }

  delete(id: number) {
    this.roomService.delete(id).subscribe({
      next: (response: any) => {
        console.log(response);
        window.location.reload()
      },
      error: (error: any) => console.log(error),
    });
  }
  edit(id: number) {
    this.router.navigate(['/edit', id]);
    // this.movieService.edit(movie).subscribe({
    //   next: (response: any) => {
    //     console.log(response);
    //     window.location.reload()
    //   },
    //   error: (error: any) => console.log(error),
    // });
  }
}
