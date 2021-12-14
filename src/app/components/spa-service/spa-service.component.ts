import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ServiceComponent } from 'src/app/service-component.component';

@Component({
  selector: 'app-spa-service',
  templateUrl: './spa-service.component.html',
  styleUrls: ['./spa-service.component.scss']
})

export class SpaServiceComponent implements OnInit, ServiceComponent {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() data: any;
}
