import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "./../../../environments/environment";
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from "rxjs/operators";


let urlAPI = "";
const httpOptions = {
headers: new HttpHeaders ( {
  "Content-Type": "application/json"
} )
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http : HttpClient) { 
    urlAPI = environment.urlApi;
  }

  get ( uri: string ) : Observable<any> {
    return this.http.get(urlAPI +"/"+ uri).pipe (
      tap((data: any)=> {
        // Loading
      }),
      catchError(err => {
        return this.handleErr(err);
      })
    )
  }
  handleErr(err) {
    switch (err.status) {
      case 500:
        console.log(err.error);
        break;

      default:
        break;
    }
    return throwError(err);
  }
  post (uri: string, data?: any): Observable<any> {
    return this.http.post(urlAPI+ "/"+ uri, data, httpOptions).pipe(
      tap((data: any) => {
        //Loading
      }),
      catchError(err => {
        return this.handleErr(err);
      })
    );
  }
}
