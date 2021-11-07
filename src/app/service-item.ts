import { Component } from '@angular/compiler/src/core';
import { Type } from '@angular/core';
import { ServiceComponent } from './service-component.component';

export class ServiceItem {
    constructor(public component: Type<any>, public data: any) {}
}