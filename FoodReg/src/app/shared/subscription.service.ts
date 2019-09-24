import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
subscriptions [ ];
  constructor(private http:HttpClient) { }

  switchSubscription(name, subscription){
    this.http.put('http://localhost:8989/changeSubscription',{username:name , subscriptionid: subscription})
  }
  generatateSubscriptions(){
    this.subscriptions =  this.http.get('http://localhost:8989/loadSubscriptions')
  }
}
