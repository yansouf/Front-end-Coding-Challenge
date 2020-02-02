import { Component, OnInit } from '@angular/core';
import { ReposService } from '../services/ReposService';
import { RepoDataSource } from './repoDataSource';
@Component({
  selector: 'app-bestrepos',
  templateUrl: './bestrepos.component.html',
  styleUrls: ['./bestrepos.component.css']
})
export class BestReposComponent   {

  ds = new RepoDataSource(this.reposService);
  constructor(private reposService : ReposService){

  }


}
