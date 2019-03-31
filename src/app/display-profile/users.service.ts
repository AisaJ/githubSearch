import { Injectable } from '@angular/core';
// import { GithubSearch } from '../github-search/github-search.component'
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable()
export class UsersService {

  //  username:string;

  constructor(private http:HttpClient) {
    console.log("service is now ready!"); 
    // this.username = 'AisaJ';
   }
   public getData(){
     this.HttpClient.get<any[]>(this.baseUrl+'userProfile/'+this.username+'userRepository/').subscribe(data =>{
       this.data = data;
     },
     error => {

     }
     );
   }

  //  getUserProfile(){
  //   console.log(this.username);
  //    return this.http.get<any[]>("https://api.github.com/users/"+ this.username+"?access_token="+environment.apiKey); 
  //    }
}
