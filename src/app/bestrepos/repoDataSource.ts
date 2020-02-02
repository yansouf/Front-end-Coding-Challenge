
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ReposService } from '../services/ReposService';
import { RepoInfo } from '../models/models';

export class RepoDataSource extends DataSource<RepoInfo | undefined> {
  private _length = 0;
  private _pageSize = 30;
  private _cachedData = Array.from<RepoInfo>({length: this._length});
  private _fetchedPages = new Set<number>();
  private _dataStream = new BehaviorSubject<(RepoInfo | undefined)[]>(this._cachedData);
  private _subscription = new Subscription();


   constructor(private reposService : ReposService){
     super();

     //Fetch the first page of repos (30 per page)
     this.reposService.get(1).subscribe(
      u =>{
        for (const repo of u.items) {
          let r : RepoInfo = {
            name:repo.name,
            disc:repo.description,
            stars:repo.stargazers_count,
            issues:repo.open_issues,
            submited:new Date(repo.created_at),
            owner:repo.owner.login,
            avatar:repo.owner.avatar_url,
            } ;
              console.log(r);

          this._cachedData.push(r)
        }
        this._dataStream.next(this._cachedData);
      }
    );

  }
  connect(collectionViewer: CollectionViewer): Observable<(RepoInfo | undefined)[]> {
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


    this.reposService.get(page).subscribe(

      u =>{
        for (const repo of u.items) {
          let r : RepoInfo = {
            name:repo.name,
            disc:repo.description,
            stars:repo.stargazers_count,
            issues:repo.open_issues,
            submited:new Date(repo.created_at),
            owner:repo.owner.login,
            avatar:repo.owner.avatar_url,
            } ;
            console.log(r);
          this._cachedData.push(r)
        }

        this._dataStream.next(this._cachedData);
      }
    );



  }
}
