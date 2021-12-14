import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user!: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  )
  {
    debugger;
    var id = this.route.snapshot.paramMap.get('id') ?? '';
    this.getUser(id);
  }

  ngOnInit(): void {
  }

  getUser(id: string) {
    this.userService.get(id)
            .pipe(first())
            .subscribe(
              (data: any) => {
                  this.user = data;
                },
                () => {
                    // this.alertService.error(error);
                    // this.loading = false;
                });
  }

}
