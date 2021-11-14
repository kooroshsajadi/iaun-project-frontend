import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ServiceComponent } from 'src/app/service-component.component';


@Component({
  selector: 'app-consultant-service',
  templateUrl: './consultant-service.component.html',
  styleUrls: ['./consultant-service.component.scss']
})
export class ConsultantServiceComponent implements OnInit, ServiceComponent {

  constructor() { }
  
  ngOnInit(): void {
  }

  @Input() data : any;
}
