import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ServiceComponent } from 'src/app/service-component.component';

@Component({
  selector: 'app-petition-service',
  templateUrl: './petition-service.component.html',
  styleUrls: ['./petition-service.component.scss']
})

export class PetitionServiceComponent implements OnInit, ServiceComponent {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() data: any;
}
