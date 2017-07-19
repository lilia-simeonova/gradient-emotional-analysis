import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TwitterService } from './../twitter.service';
import { CoordinatesService } from './../coordinates.service';


@Component({
  selector: 'app-twitter-feed',
  templateUrl: './twitter-feed.component.html',
  styleUrls: ['./twitter-feed.component.css']
})
export class TwitterFeedComponent implements OnInit {
  imageURL = '';
  name = '';
  status = '';
  arousal = '';
  someRange: any = 2;
  classification = '';
  probability = 0;
  showSpinner = false;
  test = 20;
  prob;
  someKeyboardConfig: any = {
    pips: {
      mode: 'count',
      density: 1,
      values: 2,
      stepped: true
    }
  };
  emoji;
  public result;
  results = [];
  custom = '';
  res = '';
  ownTwitter = false;
  displayExamples = false;
  constructor(private twitter: TwitterService, private coordinates: CoordinatesService, private ref: ChangeDetectorRef) { }
  onEnter(value) {
    this.getTweet(value, 'own');
    this.showSpinner = true;
  }
  ngOnInit() {
    const persons = ['malala','iamjohnoliver', 'elonmusk'];
    for (let i = 0; i < persons.length; i++) {
      this.getTweet(persons[i], i)
      }

    }
    getTweet(value, custom) {
       this.twitter.getTweet(value)
                .subscribe((res: any) => {
                  console.log(res)
                  this.results.push(res);
                  if (custom === 2) {
                      this.displayExamples = true;
                  } 
                    // if (this.classification === 'positive') {
                    //   this.emoji = '😊';
                    // } else {
                    //   this.emoji = '😩'
                    // }
                   // this.coordinates.value = 'aaaaaaaaa';

                    this.result = this.coordinates.value;
                    if (res.arousal > 4) {
                      res.arousal = "High ⬆️";
                    } else {
                      res.arousal = "Low ⬇️"
                    }
                this.prob = res.probability.toFixed(2) * 100 ;
                res.probability = parseInt(this.prob);
                
                })
    }
}
