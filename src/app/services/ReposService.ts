
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


const URL = environment.apiUrl + 'users';
@Injectable({
  providedIn: 'root'
})
export class ReposService  {

  constructor(private http : HttpClient){

  }

  get urlApi() {
    return environment.apiUrl;
  }

  get = (page ) =>
  {
   const  date = new Date((new Date().getTime()-1000*3600*24*30));
   let year = date.getFullYear();
   const month = (date.getMonth()+1).toString().length === 1 ? '0'+(date.getMonth()+1): (date.getMonth()+1);
   const day = date.getDate().toString().length === 1 ? '0'+date.getDate() : date.getDate();

   const formatedDate = year+'-'+month+'-'+day;

    return this.http.get(`${this.urlApi}`,{
    params:{

      q:'created:>'+formatedDate,
      sort:'stars',
      order:'desc',
      page:page
    }
  });

}
}
