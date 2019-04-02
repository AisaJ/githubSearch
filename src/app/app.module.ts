import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {UsersService} from './display-profile/users.service';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { ReposComponent } from './repos/repos.component';

//Defining routes
const routes:Routes=[
  {path:"github-search",component:GithubSearchComponent},
  {path:"repos",component:ReposComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    SearchComponent,
    ReposComponent       
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
