import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import * as faker from 'faker';
@Component({
  selector: 'app-bestrepos',
  templateUrl: './bestrepos.component.html',
  styleUrls: ['./bestrepos.component.css']
})
export class BestReposComponent   {

  ds = new MyDataSource();

repos : RepoInfo[]=[{
  name:"frontend-coding-challenge",
  disc:"This is my repo",
  stars:5,
  issues:30,
  submited:new Date('2020/01/20'),
  owner:"Yanssouf",
  avatar:"https://avatars2.githubusercontent.com/u/35151035?s=40&v=4",
  },{
  name:"frontend-coding-challenge",
  disc:"This is my repo",
  stars:5,
  issues:30,
  submited:new Date('2020/01/20'),
  owner:"Yanssouf",
  avatar:"https://avatars2.githubusercontent.com/u/35151035?s=40&v=4",
  },{
  name:"frontend-coding-challenge",
  disc:"This is my repo",
  stars:5,
  issues:30,
  submited:new Date(),
  owner:"Yanssouf",
  avatar:"https://avatars2.githubusercontent.com/u/35151035?s=40&v=4",
  },{
  name:"frontend-coding-challenge",
  disc:"This is my repo",
  stars:5,
  issues:30,
  submited:new Date('2020/01/20'),
  owner:"Yanssouf",
  avatar:"https://avatars2.githubusercontent.com/u/35151035?s=40&v=4",
  },
];
test = {
  name:"frontend-coding-challenge",
  disc:"This is my repo",
  stars:5,
  issues:30,
  submited:new Date(),
  owner:"Yanssouf",
  avatar:"https://avatars2.githubusercontent.com/u/35151035?s=40&v=4",
  };



}
export class RepoInfo{
name="frontend-coding-challenge";
disc="This is my repo";
stars=5;
issues=30;
submited=new Date();
owner="Yanssouf";
avatar="https://avatars2.githubusercontent.com/u/35151035?s=40&v=4";
}


export class MyDataSource extends DataSource<string | undefined> {
  private _length = 0;
  private _pageSize = 10;
  private _cachedData = Array.from<string>({length: this._length});
  private _fetchedPages = new Set<number>();
  private _dataStream = new BehaviorSubject<(string | undefined)[]>(this._cachedData);
  private _subscription = new Subscription();
   constructor(){
     super();
        for (let index = 0; index < 10; index++) {
    this._cachedData.push('k'+index.toString())

  }
  }
  connect(collectionViewer: CollectionViewer): Observable<(string | undefined)[]> {
    this._subscription.add(collectionViewer.viewChange.subscribe(range => {
      const startPage = this._getPageForIndex(range.start);
      const endPage = this._getPageForIndex(range.end - 1);
      for (let i = startPage; i <= endPage; i++) {
        this._fetchPage(i);
      }
    }));

    return this._dataStream;
  }

  disconnect(): void {
    this._subscription.unsubscribe();
  }

  private _getPageForIndex(index: number): number {
    return Math.floor(index / this._pageSize);
  }

  private _fetchPage(page: number) {
    console.log(this._cachedData.length);

    if (this._fetchedPages.has(page)) {
      return;
    }
    this._fetchedPages.add(page);

    // Use `setTimeout` to simulate fetching data from server.
setTimeout(() => {
  for (let index = 0; index < 10; index++) {
    this._cachedData.push(index.toString())

  }

  this._dataStream.next(this._cachedData);
}, Math.random() * 1000 + 200);
  }
}
