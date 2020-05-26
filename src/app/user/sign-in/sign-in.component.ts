import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isLoginError: boolean = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  OnSumit(UserName, Password) {
    this.userService.userAuthentication(UserName, Password).subscribe((data: any) => {
      localStorage.setItem("UserToken", data.access_token);
      console.log(data.access_token);
      this.router.navigateByUrl('/home');
    },

      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      });



  }
}
