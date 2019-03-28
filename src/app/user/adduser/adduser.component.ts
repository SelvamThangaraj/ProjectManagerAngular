import { Component, OnInit } from '@angular/core';
import {Usermodel} from '../usermodel';
import {UserserviceService} from '../userservice.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
 
 user:Usermodel;
 id: String;
 addedUser:Usermodel;

  constructor(private userService:UserserviceService) { }

  ngOnInit() {
    this.user=new Usermodel();
  }

  save(): void {
    console.log("submit button clicked" + this.user.firstName);

    this.userService.saveUser(this.user).subscribe(id => this.addedUser );
    //console.log("this.id=>" + this.id);
  }

}
