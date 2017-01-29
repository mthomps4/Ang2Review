import {Component, Output, EventEmitter} from "@angular/core";
import {User} from "../shared/models/user";

@Component({
  selector: "user-form",
  styles:[`
    form {
      background-color: #4e5d6c;
      padding:10px;
      border-radius:5px;
      margin-bottom:30px;
    }

    label{
      font-size:1em;
    }
  `],
  template: `
    <form #form="ngForm" (ngSubmit)="onSubmit()" *ngIf="active">
    {{form.valid}}
    <div class="form-group" [ngClass]="{'has-warning': name.invalid && name.touched}">
    <label for="name">Name:</label>
    <input type="text" class="form-control" name="name" required
          [(ngModel)]="newUser.name" #name="ngModel">
          <span class="help-block" *ngIf="name.invalid && name.touched">Name is required.</span>
    </div>

    <div class="form-group" [ngClass]="{'has-warning': username.invalid && username.touched}">
    <label for="username">Username:</label>
    <input type="text" class="form-control" name="username" required
      [(ngModel)]="newUser.username" #username="ngModel">
      <span class="help-block" *ngIf="username.invalid && username.touched">Username is required.</span>

    </div>

    <button type="submit" class="btn btn-lg btn-block btn-primary" [disabled]="form.invalid">
      Create User
    </button>
    </form>
  `
})
export class UserFormComponent {
  @Output() userCreated = new EventEmitter();

  newUser: User = new User();
  active: boolean = true;

  onSubmit() {
    this.userCreated.emit({user:this.newUser});
    this.newUser = new User();
    this.active=false;
    setTimeout(()=>this.active = true,0);
  }
}
