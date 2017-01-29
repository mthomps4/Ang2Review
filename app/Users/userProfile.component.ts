import{Component, Input} from "@angular/core";
import{User} from "../shared/models/user";

@Component({
 selector: "userProfile",
 template: `
     <div class="jumbotron" *ngIf="user">
        <h2>{{user.name}}</h2>
        <p>@{{user.username}}</p>
        <input class="form-control" [(ngModel)]="user.name">
      </div>
 `
})
export class UserProfileComponent {
  @Input() user: User;
}
