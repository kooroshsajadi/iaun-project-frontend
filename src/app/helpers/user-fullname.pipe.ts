import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'userFullname'
})
export class UserFullnamePipe implements PipeTransform {

  transform(user: any): string {
    debugger
    // var fullname = user.personalInfo?.firstName?.concat(user.personalInfo?.lastName ?? '');
    // if(fullname) {
    //   return fullname;
    // }
    // return user.username;
    return user['Username'];
  }

}
