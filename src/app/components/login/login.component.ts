import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username =  new FormControl('');
  password =  new FormControl('');
  returnUrl: string = '/panel';

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.accountService.login(this.username.value, this.password.value)
            .pipe(first())
            .subscribe(
                data => {
                  var user = JSON.parse(JSON.stringify(data));
                    this.router.navigate(['/panel', user['Id']]);
                },
                error => {
                    // this.alertService.error(error);
                    // this.loading = false;
                });
  }
}