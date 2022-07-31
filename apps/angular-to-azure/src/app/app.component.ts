import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { RegisterService } from './register.service';

@Component({
  selector: 'angular-to-azure-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-to-azure';
  text = new FormControl('');
  foo: string = "";

  constructor(private service: LoginService, private registerService: RegisterService){}

  send(): void {
    this.service.login(this.text.value).subscribe((result) => this.foo = result.name, (error) =>  this.foo = error.error);
  }

  register(): void {
    this.registerService.register(this.text.value).subscribe((result) => this.foo = result.name, (error) =>  this.foo = error.error )
  }
}
