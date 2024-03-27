import { Component, OnInit } from '@angular/core';
import { GetUserByIDService } from '../../services/get-user-by-id.service';
import { ActivatedRoute } from '@angular/router';
import { AllUser } from '../../interface/all-user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpdateUserService } from '../../services/update-user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  constructor(
    private userID: GetUserByIDService,
    private __route: ActivatedRoute,
    private __userUpdate: UpdateUserService,
    private __router: Router
  ) {}

  user: AllUser = {};
  getId: string = '';
  ngOnInit(): void {
    this.getId = this.__route.snapshot.params['id'];
    this.userID.getUserByID(this.getId).subscribe({
      next: (res) => (this.user = res),
      error: (err) => console.log(err),
    });
  }

  detailsUser: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl(),
    picture: new FormControl(),
  });

  updateUser(data: FormGroup) {
    this.__userUpdate.updateUser(this.getId, data.value).subscribe({
      next: (res) => {
        alert('Sucess');
        this.__router.navigate(['/user-list']);
      },
      error: (err) => console.log(err),
    });
  }
}
