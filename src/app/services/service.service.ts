import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private configService: ConfigService) { }

  public get(): Observable<any> {
    return this.configService.get('Services');
  }
}
