import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inventory} from 'src/app/model/inventory';
import { InventoryService } from 'src/app/service/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {


  constructor(private http: HttpClient,
    private inventoryService: InventoryService,
    
  ) { }

  ngOnInit(): void {
    const currentInventory = localStorage.getItem('inventory');
    if (currentInventory) {
      this.inventory = JSON.parse(currentInventory);
    }

  }
  inventory: Inventory[] = []; 
  newStock: Inventory = { stockid: 0, itemname: '', quantity: 0 };
  editStock: Inventory | null = null;

  addStock() {
    const stockid = this.inventory.length > 0 ? this.inventory[this.inventory.length - 1].stockid + 1 : 1;
    this.inventory.push({ ...this.newStock, stockid });
    this.newStock = { stockid: 0, itemname: '', quantity: 0 };
    this.updateLocalStorage();
  }
  deleteStock(stockid: number) {
    const index = this.inventory.findIndex(item => item.stockid === stockid);
    if (index !== -1) {
      this.inventory.splice(index, 1);
      this.updateLocalStorage();
    } 
  }
  editStockItem(item: Inventory) {
    this.editStock = { ...item };
  }

  saveStock() {
    const index = this.inventory.findIndex(item => item.stockid === this.editStock?.stockid);
    if (index !== -1 && this.editStock) {
      this.inventory[index] = { ...this.editStock };
      this.editStock = null;
      this.updateLocalStorage();
}
}
private updateLocalStorage() {
  localStorage.setItem('inventory', JSON.stringify(this.inventory));
}
}



