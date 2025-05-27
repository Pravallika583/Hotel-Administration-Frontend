import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewModel } from '../../model/newModel';
import { NewRoom } from '../../model/newRoom';
import { RoomService } from '../../service/room.service';

@Component({
  selector: 'app-add-roomdetails',
  templateUrl: './add-roomdetails.component.html',
  styleUrls: ['./add-roomdetails.component.css']
})
export class AddRoomdetailsComponent implements OnInit {

  initialMovies!: NewRoom[];
  id: number = 0;
  newModel: NewModel = {
    id:0,
    roomname: '',
    roomtype: '1BHK',
    img: '',
    price: 0,

  };

  constructor(
    private router: Router,
    private roomService: RoomService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.newModel.id = this.route.snapshot.params['id'];
    
  }

  addRoom() {
    if(this.newModel.id===0){
    console.log(this.newModel);
    this.roomService.addRoom(this.newModel).subscribe({
      next: (response: any) => {
        console.log(response);
        this.router.navigate(['/']);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  else{
    this.roomService.update(this.newModel).subscribe({
      next: (response: any) => {
        console.log(response);
        this.router.navigate(['/']);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
   }
  }

}


