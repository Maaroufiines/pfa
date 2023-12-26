import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConcoursService {
    url = "http://localhost:8088/api/concours"
    constructor(private http: HttpClient) { }

    public getAllConcours(): Observable<any[]> {
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
        return this.http.get<any[]>(this.url , { headers });
    }

    public addConcours(concours: any): Observable<any> {
        return this.http.post(this.url , concours)
    }

    public deleteConcours(id: any): Observable<any> {
        return this.http.delete(this.url+"/"+id)
    }

    public addUserConcours(concoursId: any , userId : any): Observable<any> {
        return this.http.put(this.url+"/"+concoursId+"/user/"+userId , {})
    }

    public getConcourById(id:any): Observable<any[]> {
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
        return this.http.get<any[]>(this.url+"/"+id , { headers });
    }



}
