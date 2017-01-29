import {Component} from "@angular/core";
import {User} from "./shared/models/user";

@Component({
  selector: "my-app",
  template: `
    <header>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
        <div class="navbar-header">
          <a href="/" class="navbar-brand">Angular 2</a>
        </div>
        </div>
      </nav>
    </header>

<main>
<div class="row">
      <div class="col-sm-4">
        <div *ngIf="users">
          <ul class="list-group users-list">
            <li class="list-group-item"
                *ngFor="let user of users"
                (click)="selectUser(user)"
                [class.active]="user === activeUser">
              {{user.name}} (@{{user.username}})
            </li>
          </ul>
        </div>
        </div>

        <div class="col-sm-8">
            <div class="jumbotron" *ngIf="activeUser">
               <h2>{{activeUser.name}}</h2>
               <p>@{{activeUser.username}}</p>
            </div>

            <div class="jumbotron" *ngIf="!activeUser">
              <h2> <= Choose A User </h2>
            </div>
        </div>
</div>
</main>


    <footer class="text-center">
      Copyright &copy; 2017;
    </footer>
  `,
  styles:[`
      .users-list li{
        cursor: pointer;
      }
      .users-list li:hover, .users-list li.active{
        background-color:#bf5a16;
      }
    `]

})
export class AppComponent {
  message = "Hello from the message component!";
    users: User[] = [
      {id: 25, name: "Matt", username: "mthomps4"},
      {id: 26, name: "Emily", username: "EmDots"},
      {id: 27, name: "Adam", username: "AdeeMo"}
    ];

    activeUser: User;

    selectUser(user: User):any {
      this.activeUser = user;
      console.log(this.activeUser);
    }
}
