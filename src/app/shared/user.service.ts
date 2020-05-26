import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

import { User } from './user.model';

@Injectable()
export class UserService {
  readonly rootUrl = 'https://localhost:44358';
  constructor(private http: HttpClient) { }

  registerUser(user : User){
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      ConfirmPassword:user.ConfirmPassword,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    }
    return this.http.post(this.rootUrl + '/api/Account/Register', body);
  }

}