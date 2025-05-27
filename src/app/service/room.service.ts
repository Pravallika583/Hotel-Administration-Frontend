import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NewModel } from '../model/newModel';
import { NewRoom } from '../model/newRoom';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  //  initialMovies: NewMovie[] = [
  //   {
  //     id: 1,
  //     moviename: 'Virata Parvam',
  //     price: 150,
  //     category: 'Action/Thriller',
  //     img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODUlICA1ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00304440-meukhyvtcr-portrait.jpg',
  //   },

  //   {
  //     id: 2,
  //     moviename: 'Ante Sundaraniki',
  //     price: 150,
  //     category: 'Comedy',
  //     img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODUlICAzM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00323425-erhnzuheed-portrait.jpg',
  //   },

  //   {
  //     id: 3,
  //     moviename: 'Major',
  //     price: 200,
  //     category: 'Action/Biography',
  //     img: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTYlICA5M2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00097589-tkvxggdjee-portrait.jpg',
  //   },
  // ];
  room!: NewRoom;

  constructor(private router: Router, private http: HttpClient) {}

  getAllRooms() {
    // return this.initialMovies;
    return this.http.get(`http://localhost:9091/api/post/get/all`);
  }

  getRoomById(id: number) {
    // this.initialMovies.forEach((m) => {
    //   // console.log(movie);
    //   if (Number(m.id) === Number(id)) {
    //     this.movie = m;
    //   }
    // });
    // return this.movie;
    return this.http.get(`http://localhost:9091/api/post/get/${id}`);
  }
  update(newModel:NewModel) {
    // return this.initialMovies;
    return this.http.put(`http://localhost:9091/api/post/update`,newModel);
  }

  addRoom(room: NewModel) {
    return this.http.post(`http://localhost:9091/api/post/add`, room);
  }
  delete(id: number) {
    return this.http.delete(`http://localhost:9091/api/post/delete/${id}`);
  }
}
