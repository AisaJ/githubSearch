import { Component, OnInit } from '@angular/core';
import { UsersService } from '../display-profile/users.service';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  providers: [UsersService],
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  
  // userProfile: any=[];


  constructor(private usersService:UsersService,private http:HttpClient) { 
    this.usersService.getUserProfile().subscribe(profile =>{
      console.log(profile);
    });
  }

  ngOnInit() {
  }

}
