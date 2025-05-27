import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;
  constructor(private router: Router,private authService:AuthService) { }
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.isAdmin = this.authService.isAdmin();
  }
  signin()
  {
    this.router.navigate(['/login']);
  }
  signout()
  {
    // this.router.navigate(['/login']);
    // localStorage.removeItem('email');
    this.authService.signout();
  }
  create(){
    this.router.navigate(['/add']);
  }
  inventory(){
    this.router.navigate(['/inventory']);
  }
  Bookings(){
    this.router.navigate(['/bookings']);
  }
  history(){
    this.router.navigate(['/bookings']);
  }
  

}
