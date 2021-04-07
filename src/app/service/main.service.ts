import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000"

  submit(formData){
    return this.http.post(`${this.url}/fileUpload`,formData).toPromise()
  }

}
