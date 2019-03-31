import { Injectable } from '@angular/core';
// import { GithubSearch } from '../github-search/github-search.component'
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public username:string;

  constructor(private http:HttpClient) {
    console.log("service is now ready!"); 
    this.username = 'AisaJ';
   }

   getUserProfile(){
     return this.http.get('https://api.github.com/users/'+this.username).map(res=>res.json()); 
   }
}
