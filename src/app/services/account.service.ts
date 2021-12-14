import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment.prod';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private router: Router, private http: HttpClient) {
    var currentUser = localStorage.getItem('user');
    if(currentUser) {
      this.userSubject = new BehaviorSubject<User>(JSON.parse(currentUser));
      this.user = this.userSubject.asObservable();
    }
    else {
      this.userSubject = new BehaviorSubject<User>(new User());
      this.user = this.userSubject.asObservable();
    }
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(username: any, password: any) {
    debugger;
    return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })
        .pipe(map(user => {
            debugger;
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
        }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(new User());
    this.router.navigate(['/login']);
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/users/register`, user);
  }
}
