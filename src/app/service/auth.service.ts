import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }
  login(user: any) {
       //localStorage.setItem('email', user.email);
    //  this.router.navigate(['']);
       return this.http.post(`http://localhost:9091/api/auth/login`,user);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('email') != null;
  }
  isAdmin(): boolean {
    return localStorage.getItem('isAdmin') === 'true'; 
  }
  signout(){
    this.router.navigate(['/login']);
     localStorage.clear();
  }

  register(userForm: any) {
    return this.http.post(`http://localhost:9091/api/auth/register`,userForm);
  }
}
