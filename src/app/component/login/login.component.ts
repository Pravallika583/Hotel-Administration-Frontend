import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };
  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit(): void {}
  login() {
    //this.router.navigate(['']);
    //localStorage.setItem('email', this.user.email);
    this.authService.login(this.user).subscribe({
      next: (response: any) => {
        console.log(response);
        localStorage.setItem('email', response.email);
        localStorage.setItem('isAdmin',response.admin);
        localStorage.setItem('id',response.id);
        this.router.navigate(['']);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
