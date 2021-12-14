import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private serverAddress = "https://localhost:44331/api";

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
  
  public get(url: string): Observable<any> {
    var apiUrl = this.serverAddress + '/' + url;
    return this.http.get(apiUrl, this.httpOptions);
  }

  // public post(url, body, mode?: string): Observable<any> {
  //   let httpOptions
  //   if (mode == "zip") {
  //     httpOptions = {
  //       headers: new HttpHeaders({'Content-Type': 'application/json'}),
  //       responseType: 'blob'
  //     }
  //   }
  //   else {
  //     httpOptions = {
       
  //       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
         
  //     }
  //   }
  //   return this.http.post(this.serverAddress + '/' + url, JSON.stringify(body), httpOptions);
  // }

  // public put(): Observable<any> {
    
  // }

  // public delete(): Observable<any> {
    
  // }
}
