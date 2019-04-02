import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GithubSearchComponent } from '../github-search/github-search.component';
import { ReposComponent } from '../repos/repos.component';

//Defining routes
const routes:Routes=[
  {path:"/github-search",component:GithubSearchComponent},
  {path:'/github-search:id',component:GithubSearchComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
