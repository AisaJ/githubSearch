import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { UserRepository } from './user-repository';
import { environment } from '../../environments/environment';


@Injectable()
export class UsersService {

  baseURL:string="https://api.github.com/"

  constructor(private http:HttpClient) {
    console.log("service is now ready!"); 
    // this.username = 'AisaJ';
   }

   getUserRepository(username:string):Observable<user-repository[]>{
     return this.http.get<user-repository[]>(this.baseURL + 'user-profie')
   }

  //  public getData(){
  //    this.HttpClient.get<any[]>(this.baseUrl+'userProfile/'+this.username+'userRepository/').subscribe(data =>{
  //      this.data = data;
  //    },
  //    error => {

  //    }
  //    );
  //  }

  //  getUserProfile(){
  //   console.log(this.username);
  //    return this.http.get<any[]>("https://api.github.com/users/"+ this.username+"?access_token="+environment.apiKey); 
  //    }
}
