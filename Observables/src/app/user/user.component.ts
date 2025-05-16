import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  activeStatus : boolean;

  constructor(
    private route: ActivatedRoute,
    private userService : UserService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
    this.userService.activatedEmitter.next(false);
  }

  onActivate(){
    this.userService.activatedEmitter.next(true);
  }

  toggleActiveStatus(){
    this.userService.activatedEmitter.subscribe((status)=>{
      this.activeStatus = status;
    });
    this.userService.activatedEmitter.next(!this.activeStatus);  
  }
}
