import { Component, OnInit } from '@angular/core';
import { UsersService } from '../display-profile/users.service';
import { HttpClient } from '@angular/common/http';
import { Repositories } from '../repositories';
import {Profiles} from '../profiles';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  providers: [UsersService],
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  
  username: string = 'AisaJ';
  repositories: Repositories[];
  profiles: Profiles[];

  loading: boolean=false;
  errorMessage;

  constructor(private usersService:UsersService, private http:HttpClient   ) { }
     public getRepositories(){
      this.loading=true;
      this.errorMessage=" ";
      this.usersService.getRepositories(this.username)
        .subscribe((response) => {this.repositories=response;
        console.log(response)
        },
        (error) => {this.errorMessage=error; this.loading=false; },
        () => {this.loading=false})
      }
      
      public getProfiles(){
        
        this.usersService.getProfiles(this.username)
          .subscribe((response) => {this.profiles=response;
          console.log(response)
          })
        }

  ngOnInit() {
  }

}
