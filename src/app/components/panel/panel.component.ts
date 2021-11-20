import { ChangeDetectorRef, Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { ServiceService } from 'src/app/services/service.service';
import { ServiceItem } from 'src/app/service-item';
import { ServiceDirective } from 'src/app/service.directive';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { first } from 'rxjs/operators';
import { User } from 'src/app/models/user';

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

  user: User = new User();
  
  constructor (
    changeDetectorRef: ChangeDetectorRef
    , media: MediaMatcher
    , private serviceService: ServiceService
    , private componenntFactoryResolver: ComponentFactoryResolver
    , private route: ActivatedRoute
    , private userService: UserService
    ) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addEventListener('change', this._mobileQueryListener);
      this.services = this.serviceService.getServices();
      this.user.id = this.route.snapshot.paramMap.get('id') ?? '';
  }

  @ViewChild(ServiceDirective, {static: true}) appService!: ServiceDirective;

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.getUser(this.user.id ?? '');
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

  getUser(id: string) {
    this.userService.get(id)
            .pipe(first())
            .subscribe(
              (data: any) => {
                debugger;
                    this.user = data;
                },
                () => {
                    // this.alertService.error(error);
                    // this.loading = false;
                });
  }
}