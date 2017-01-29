import {Component} from "@angular/core";
import {User} from "./shared/models/user";

@Component({
  selector: "my-app",
  templateUrl: "./app/app.component.html",
  styleUrls:["./app/app.component.css"]
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
