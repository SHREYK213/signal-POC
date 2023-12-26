import { Component, OnInit, ViewChild } from '@angular/core';
import { Form1Component } from '../form1/form1.component';
import { SignalService } from 'src/app/services/signal.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit{
  form1Data=''
  form2Data=''
  // @ViewChild(Form1Component) childComponent1: Form1Component | undefined;
  // @ViewChild(Form1Component) childComponent2: Form1Component | undefined;

  constructor(private service:SignalService){

  }
  ngOnInit(){
    this.service.form1Data.subscribe(value=>this.showForm1Data(value))
    this.service.form2Data.subscribe(value=>this.showForm2Data(value))
  }
  showForm1Data(data:any){
    this.form1Data=data
  }
  showForm2Data(data:any){
    this.form2Data=data
  }
}
