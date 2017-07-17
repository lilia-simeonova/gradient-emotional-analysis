import { Component, OnInit, Input } from '@angular/core';
import { TwitterService } from './../twitter.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./../twitter-feed/twitter-feed.component.css']
})


export class CustomComponent implements OnInit {
  custom = '';
  result = '';
  public res = '';
  ownTwitter = false;
  arousal = '';
  showSpinner = false;
  someKeyboardConfig: any = {
    pips: {
      mode: 'count',
      density: 1,
      values: 6,
      stepped: true
    }
  };
  constructor(private twitter: TwitterService) { }
  onEnter(value) {
    console.log('aaa')
    this.getTweet(value, 'own');
    this.showSpinner = true;
  }

  ngOnInit() {
  }
  getTweet(value, custom) {
       this.twitter.getTweet(value)
                .subscribe((res: any) => {
                  console.log(res)
                  if (custom === 'none') {
                    //this.results.push(res);
                  } else {
                    this.ownTwitter = true;
                    this.showSpinner = false;
                    this.res = res
                    console.log('show reeeeeeeees', res.arousal)
                  }
                    // if (this.classification === 'positive') {
                    //   this.emoji = '😊';
                    // } else {
                    //   this.emoji = '😩'
                    // }
                   // this.coordinates.value = 'aaaaaaaaa';
                    //this.result = this.coordinates.value;
                      if (res.arousal > 4) {
                      res.arousal = "High ⬆️";
                    } else {
                      res.arousal = "Low ⬇️"
                    }
                })
    }
}
