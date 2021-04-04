import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  public apiRoot = `https://api.github.com`;
  public headers = new HttpHeaders();

  constructor(public http: HttpClient) { }

  public setHeaders(){
    this.headers = this.headers.set('Accept', 'application/vnd.github.v3+json');
  }

  public getWithParam(object:String, queryParam: string){
    this.setHeaders();
    return this.http.get(`${this.apiRoot}${object}${queryParam}`, {headers: this.headers});
  }
}
