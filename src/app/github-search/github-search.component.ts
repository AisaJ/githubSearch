import { Component, OnInit } from '@angular/core';
import { UsersService } from '../display-profile/users.service';
import { HttpClient } from '@angular/common/http';
import { Repositories } from '../repositories';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  providers: [UsersService],
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  
  username: string = 'AisaJ';
  repositories: Repositories[];

  loading: boolean=false;
  errorMessage;

  constructor(private usersService:UsersService, private http:HttpClient ) { }
     getRepositories(){
      this.loading=true;
      this.errorMessage=" ";
      this.usersService.getRepositories(this.username)
        .subscribe((response) => {this.repositories=response;
        console.log(response)
        },
        (error) => {this.errorMessage=error; this.loading=false; },
        () => {this.loading=false})
    
  }

  ngOnInit() {
  }

}
