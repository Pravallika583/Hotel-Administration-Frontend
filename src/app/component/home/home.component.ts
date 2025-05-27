import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { NewMovie } from 'src/app/model/newMovie';
import { NewRoom} from 'src/app/model/newRoom';
import {Message} from 'src/app/model/message';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rooms!: NewRoom[]; 
  // message: Message[] = [];
  // newmessage: Message = {
  //   messageid : 0,
  //   name : "ppp ",
  //   email : "mmmm ",
  //   msg : "kkk",
  // };

  constructor(private router: Router, private roomService: RoomService) { }

  ngOnInit(): void {
   this.getallRooms();
  }
  getallRooms(){
   this.roomService.getAllRooms().subscribe({
    next: (response: any) => {
      this.rooms = response;
      console.log(response);
    },
    error: (error) => {
      console.log(error);
    },
   });
  }
  

}
