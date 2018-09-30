import { Component, OnInit } from '@angular/core';
import { User } from './address-card/user.model';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;
  inputText: string = "Initial Value";
  userName: string = "";
  response: any;

  constructor(private svc: TestService, private http: HttpClient) {
    this.user = new User();
    this.user.name = "Mr. Prashant";
    this.user.designation = "Application Development Analyst";
    this.user.address = "Indirapuram";
    this.user.phone = [
      '1122334455',
      '9988776655'
    ]

    svc.printToConsole('Hello World Again!!!');
  }

  ngOnInit() {
  }

  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
      .subscribe((response) => {
        this.response = response;
        console.log(response)
      });
  }
}
