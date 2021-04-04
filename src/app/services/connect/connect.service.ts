import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  public apiRoot = `https://api.github.com`;
  public headers = new HttpHeaders();
  private token = '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';

  constructor(public http: HttpClient) { }

  public setHeaders(){
    this.headers = this.headers.set('Accept', 'application/vnd.github.v3+json');
    if(this.token){
      this.headers = this.headers.set('Authorization', `token ${this.token}`);
    }
  }

  public getWithParam(enpoint:String, queryParam: string){
    this.setHeaders();
    return this.http.get(`${this.apiRoot}${enpoint}${queryParam}`, {headers: this.headers});
  }
}
