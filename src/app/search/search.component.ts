import { Component, OnInit } from '@angular/core';
import {UsersService} from '../display-profile/users.service'
import {UserRepository} from '../user-repository'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  userProfile:any=[];

  constructor() { }

  ngOnInit() {
  }

}
