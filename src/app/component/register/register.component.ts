import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  errorMessage: string = '';
  userForm = {
    email: '',
    password: '',
    confirmpassword: '',
  };

  constructor(private router: Router, private authService: AuthService) {}
  ngOnInit(): void {}

  validate() {
    if (this.userForm.password === this.userForm.confirmpassword) {
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Password and Confirm Password did not match';
    }
  }

  isValid() {
    return this.errorMessage === '';
  }

  register() {
    //this.router.navigate(['/login']);
    this.authService.register(this.userForm).subscribe({
      next: (response: any) => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
