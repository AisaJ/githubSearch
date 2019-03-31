import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { Repositories } from '../repositories';
import { environment } from '../../environments/environment';


@Injectable()
export class UsersService {

  baseURL:string="https://api.github.com/"

  constructor(private http:HttpClient) {
    console.log("service is now ready!"); 
    // this.username = 'AisaJ';
   }

   getRepositories(username:string):Observable<Repositories[]>{
     return this.http.get<Repositories[]>(this.baseURL + 'profiles/' + username + '/repositories')
   }

}
