import { Component, OnInit, OnChanges, ChangeDetectorRef, Input } from '@angular/core';
import { CoordinatesService } from './../coordinates.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {
  public lineChartData: Array<any> = [
    {data: [, 10 , , ]}
  ];
  public lineChartLabels:Array<any> = ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: '#fff',
      borderColor: '#fff',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: '#fff',
      borderColor: '#fff',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  arr = [];
  confidence;
@Input() result: any;
  constructor( private coordinates: CoordinatesService, private ref: ChangeDetectorRef) { }
  
  ngOnChanges() {
    this.result = this.coordinates.value;
    this.confidence = this.result.probability * 100;
        this.arr = [, , , , , , , , , , , ];
    if (this.confidence > 0 && this.confidence < 10) {
      this.arr[0] = this.result.arousal;
    }
    if (this.confidence > 0 && this.confidence < 10) {
      this.arr[0] = this.result.arousal;
    }
    if (this.confidence >= 10 && this.confidence < 20) {
      this.arr[1] = this.result.arousal;
    }
    if (this.confidence >= 20 && this.confidence < 30) {
      this.arr[2] = this.result.arousal;
    }
    if (this.confidence >= 30 && this.confidence < 40) {
      this.arr[3] = this.result.arousal;
    }
    if (this.confidence >= 40 && this.confidence < 50) {
      this.arr[4] = this.result.arousal;
    }
    if (this.confidence >= 50 && this.confidence < 60) {
      this.arr[5] = this.result.arousal;
    }
    if (this.confidence >= 60 && this.confidence < 70) {
      this.arr[6] = this.result.arousal;
    }
    if (this.confidence >= 70 && this.confidence < 80) {
      this.arr[7] = this.result.arousal;
    }
    if (this.confidence >= 80 && this.confidence < 90) {
      this.arr[6] = this.result.arousal;
    }
    if (this.confidence >= 90 && this.confidence <= 100) {
      this.arr[7] = this.result.arousal;
    }

    this.lineChartData = [{data: this.arr }];
  }
  ngOnInit() {

    //this.result = this.coordinates.value;
  }
  // lineChart

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
