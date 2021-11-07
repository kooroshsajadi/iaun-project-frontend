import { Component, Input, OnInit, Injectable } from '@angular/core';
import { ServiceComponent } from 'src/app/service-component.interface';

@Component({
  selector: 'app-complaint-service',
  templateUrl: './complaint-service.component.html',
  styleUrls: ['./complaint-service.component.scss']
})

export class ComplaintServiceComponent implements OnInit, ServiceComponent {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() data: any;
}
