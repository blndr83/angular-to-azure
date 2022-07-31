import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'angular-to-azure-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-to-azure';
  text = new FormControl('');
  foo: string = "";

  constructor(private service: LoginService){}

  send(): void {
    this.service.login(this.text.value).subscribe((result) => this.foo = result.name, (error) =>  this.foo = error.error);
  }
}
