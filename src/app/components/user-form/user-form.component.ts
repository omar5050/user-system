import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddUser } from '../../interface/add-user';
import { ErrorUser } from '../../interface/error-user';
import { Router } from '@angular/router';
import { AddUserService } from '../../services/add-user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  constructor(private __addUser: AddUserService, private __route: Router) {}
  user: AddUser = {};
  error: ErrorUser = {};

  addUser: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    picture: new FormControl(),
  });

  registr(form: FormGroup) {
    console.log(form);
    this.user = form.value;
    this.__addUser.addUser(this.user).subscribe({
      next: (res) => {
        alert('Sucess');
        this.__route.navigate(['/user-list']);
      },
      error: (err) => {
        this.error = err.error.data;
      },
    });
  }
}
