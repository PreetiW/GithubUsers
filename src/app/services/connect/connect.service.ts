import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  public apiRoot = `https://api.github.com`;
  public headers = new HttpHeaders();
  private token = 'PUT_YOUR_PRIVATE_TOKEN';

  constructor(public http: HttpClient) { }

  public setHeaders(){
    this.headers = this.headers.set('Accept', 'application/vnd.github.v3+json');
    // uncomment this to use the GitHub API for unlimited times
    // if(this.token){
    //   this.headers = this.headers.set('Authorization', `token ${this.token}`);
    // }
  }

  public get(enpoint:String){
    this.setHeaders();
    return this.http.get(`${this.apiRoot}${enpoint}`, {headers: this.headers});
  }

  public getWithParam(enpoint:String, queryParam: string){
    this.setHeaders();
    return this.http.get(`${this.apiRoot}${enpoint}${queryParam}`, {headers: this.headers});
  }
}
