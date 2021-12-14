import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRippleModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomePageComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { PanelComponent } from './components/panel/panel.component';
import { ServiceDirective } from './service.directive';
import { ConsultantServiceComponent } from './components/consultant-service/consultant-service.component';
import { PetitionServiceComponent } from './components/petition-service/petition-service.component';
import { ComplaintServiceComponent } from './components/complaint-service/complaint-service.component';
import { SpaServiceComponent } from './components/spa-service/spa-service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFullnamePipe } from './helpers/user-fullname.pipe';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomePageComponent,
    SignupComponent,
    FooterComponent,
    PanelComponent,
    ServiceDirective,
    ConsultantServiceComponent,
    PetitionServiceComponent,
    ComplaintServiceComponent,
    SpaServiceComponent,
    UserFullnamePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatRippleModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  providers: [UserFullnamePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
