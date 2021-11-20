import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public get(id: string) {
    return this.httpClient.get(`${environment.apiUrl}/users/${id}`)
        .pipe(map(user => {
            return user;
        }));
  }
}
