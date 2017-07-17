import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-botalike',
  templateUrl: './botalike.component.html',
  styleUrls: ['./botalike.component.css'],
  animations: [
    trigger('flyInOut', [
     // state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(100%)'
        }),
        animate('3s ease-in')
      ]),
      transition('* => void', [
        animate('0.2s 0.1s ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class BotalikeComponent implements OnInit {
  showText = '';
  showText2 = '';
  text = false;
  message2 = false;
  messages = ['aaaaa', 'bbbbb'];
  constructor() { 
    // this.test:string = '';
  }

  ngOnInit() {
    this.text = true;
    setTimeout( () => {
       this.showText = 'Hi there, I\'m Emotional Analyzer! Powered by AI, I can evaluate sentiment and arousal level of tweets...';
    }, 5000);
    setTimeout( () => {
       this.showText2 = 'Check out what I can do...';
    }, 7000);
    setTimeout( () => {
       this.message2 = true;
    }, 5000);
  }

}
