import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComplaintServiceComponent } from '../components/complaint-service/complaint-service.component';
import { ConsultantServiceComponent } from '../components/consultant-service/consultant-service.component';
import { PetitionServiceComponent } from '../components/petition-service/petition-service.component';
import { SpaServiceComponent } from '../components/spa-service/spa-service.component';
import { ConfigService } from '../config/config.service';
import { ServiceItem } from '../service-item';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private configService: ConfigService) { }

  public get(): Observable<any> {
    return this.configService.get('Services');
  }

  getServices() {
    return [
      new ServiceItem(
        ConsultantServiceComponent,
        { name: 'مشاوره', bio: 'Brave as they come' }
      ),
      new ServiceItem(
        PetitionServiceComponent,
        { name: 'دادخواست', bio: 'Smart as they come' }
      ),
      new ServiceItem(
        ComplaintServiceComponent,
        { headline: 'شکایت نامه', body: 'Submit your resume today!' }
      ),
      new ServiceItem(
        SpaServiceComponent,
        { headline: 'مبایعه نامه', body: 'Apply today' }
      )
    ];
  }
}
