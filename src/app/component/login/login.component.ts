import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private router:Router,private authservice:AuthService) {

}
  onLoginClick(event: Event): void{
    event.preventDefault();
    this.authservice.login();
    this.router.navigateByUrl('/dashboard')
  }
}
