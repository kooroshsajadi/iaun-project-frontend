import { ChangeDetectorRef, Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { ServiceService } from 'src/app/services/service.service';
import { ServiceItem } from 'src/app/service-item';
import { ServiceDirective } from 'src/app/service.directive';

/** @title Responsive sidenav */
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})

export class PanelComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  
  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  serviceName: string = "خدمت";

  @Input() services: ServiceItem[] = [];
  
  constructor (
    changeDetectorRef: ChangeDetectorRef
    , media: MediaMatcher
    , private serviceService: ServiceService
    , private componenntFactoryResolver: ComponentFactoryResolver 
    ) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addEventListener('change', this._mobileQueryListener);
      this.services = this.serviceService.getServices();
  }

  @ViewChild(ServiceDirective, {static: true}) appService!: ServiceDirective;

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

  alterUi(event: any) {
    var serviceItemIndex = event.srcElement.attributes.id || event.currentTarget.id;
    this.loadComponent(serviceItemIndex);
    var clickedServiceName = event.target.innerText;
    this.serviceName = clickedServiceName;
  }

  private loadComponent(serviceIndex: number) {
    const serviceItem = this.services[serviceIndex];
    const viewContainerRef = this.appService.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(this.componenntFactoryResolver.resolveComponentFactory(serviceItem.component));
    componentRef.instance.data = serviceItem.data;
  }
}