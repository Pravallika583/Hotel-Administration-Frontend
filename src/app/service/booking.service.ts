import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }


  addbooking(room:any, user:any){
    room.userId = user;
    return this.http.post(`http://localhost:9091/api/booking/room-booking`,room);
  }

  getAllBookings() {
    return this.http.get(`http://localhost:9091/api/booking/all`);
  }

  getuserbooking(id: number) {
    return this.http.get(`http://localhost:9091/api/booking/userbooking/${id}`);
  }
}


