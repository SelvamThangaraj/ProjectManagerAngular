import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Usermodel } from './usermodel';
//import { toBase64String } from '../../node_modules/@angular/compiler/src/output/source_map';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Accept':'application/json'})
};
@Injectable({
  providedIn: 'root'
})

export class UserserviceService {

 private pmSaveUserApiUrl = 'http://localhost:8085/user/add';
  

  constructor(private http: HttpClient) { }

  saveUser(user: Usermodel): Observable<any> {
    console.log('inside saveEmployee()' + user.employeeId);
 
    console.log(this.http.post<Usermodel>(this.pmSaveUserApiUrl, user, httpOptions));
    /*.pipe(
      tap(id => this.log(`added emp with id=${id}`)),
      catchError(this.handleError<Emp>('saveEmp'))
    );*/
    return null;
  }
}
