import { Component, OnInit } from '@angular/core';
import { GetAllUserService } from '../../services/get-all-user.service';
import { AllUser } from '../../interface/all-user';
import { DeleteUserService } from '../../services/delete-user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  constructor(
    private allUser: GetAllUserService,
    private userDel: DeleteUserService
  ) {}
  all: AllUser[] = [];
  filterData: Array<any> = [];
  countPage: number = 0;
  defutlImg: string =
    '../../../assets/img/2340254fb07483122ff40273dfb2a410.jpg';
  defultNum: string = '01022333129';
  serach: string = '';
  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.allUser.getAllUser(this.countPage).subscribe({
      next: (res) => {
        this.all = res.data;
      },
      error: (err) => console.log(err),
    });
  }

  countIncreese() {
    return this.countPage <= 10 ? this.countPage++ : 10;
  }

  countDecresse() {
    return this.countPage >= 1 ? this.countPage-- : 1;
  }

  searchByName(value: string = '') {
    if (!value) {
      this.filterData = this.all;
      return;
    }

    this.filterData = this.all.filter((user) =>
      user.firstName?.includes(value)
    );
  }

  deleteUser(id: string) {
    this.userDel.deleteUserByID(id).subscribe({
      next: (res) => this.getUser(),
      error: (err) => console.log(err),
    });
  }
}
