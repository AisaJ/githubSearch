import { Component, OnInit } from '@angular/core';
import { UsersService } from '../display-profile/users.service';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  providers: [UsersService],
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
