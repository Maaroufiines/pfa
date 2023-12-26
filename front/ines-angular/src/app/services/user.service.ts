import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { AuthRequest } from '../models/authRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:8088/api/auth/";
  constructor(private httpClient: HttpClient) { }

  public generateToken(request: AuthRequest): Observable<any> {
    return this.httpClient.post<any>(this.url+"login", request);
  }


  /*public welcome(token : any) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.get<string>("http://localhost:9033/myapp/", {headers, responseType: 'text' as 'json' });
  }*/


  public verify(): Observable<boolean> {
    let tokenStr = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.get<boolean>(this.url+"getAuth", { headers });
  }
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    let returnValue = true;
    this.verify().subscribe(
      data => {
        returnValue = data;
      }
    );
    return returnValue;
  /*  if (!returnValue)
      return false;
    const tokenPayload = JSON.parse(atob(token.split('.')[1]));
    if (tokenPayload.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
      return false;
    }
    return true;*/
  }

  signUp(user : User) : Observable<User>
  {
    return this.httpClient.post<User>(this.url+"signUp",user);
  }

  getUserByEmail(email : string) : Observable<User>
  {
   return this.httpClient.get<User>(this.url+email);
  }

  getSession() : Observable<any>
  {
    let tokenStr = 'Bearer ' + localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', tokenStr);
   return this.httpClient.get<any>(this.url+"getSessions",{headers})
  }

  verifyPassword(oldPassword : string,encryptedPassword : string)  : Observable<Boolean>
  {
    return this.httpClient.get<Boolean>(this.url+"verifyPassword?password="+oldPassword +"&encrypted="+encryptedPassword)
  }
}
