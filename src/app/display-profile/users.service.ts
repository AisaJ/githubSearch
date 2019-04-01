import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Repositories } from '../repositories';
import { environment } from '../../environments/environment';
import {Profiles} from '../profiles';


@Injectable()
export class UsersService {

  baseURL:string="https://api.github.com/users/"

  constructor(private http:HttpClient) {
    console.log("service is now ready!"); 
    // this.username = 'AisaJ';
   }

   getRepositories(username:string):Observable<Repositories[]>{
     return this.http.get<Repositories[]>(this.baseURL + username + '/repos')
   }
   getProfiles(username:string):Observable<Profiles[]>{
    return this.http.get<Profiles[]>(this.baseURL + username)
  }


}
