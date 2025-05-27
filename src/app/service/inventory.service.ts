import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from '../model/inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {



  constructor(private http: HttpClient) { }


}
