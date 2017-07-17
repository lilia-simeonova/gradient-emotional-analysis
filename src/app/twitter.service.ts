import { Injectable, Inject, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TwitterService {

   constructor(private http: Http) { }

   getTweet(user) {
     const config = {
        params: {
            user: user
        }
    }
     const url = 'https://emolizer.herokuapp.com/';
     return this.http.get(url, config)
                .map((result) => result.json())
   }
}
