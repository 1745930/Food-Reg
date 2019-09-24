import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(private http:HttpClient) { }
  //create package with food objects
  
  createPackage(package){
   this.http.put('http://192.168.1.9:8989/registerCarePackage',package)
    )
  }
}
