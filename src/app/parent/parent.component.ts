import { Component, ViewChild } from '@angular/core';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  // @ViewChild(Form1Component) childComponent1: Form1Component | undefined;
  // @ViewChild(Form1Component) childComponent2: Form1Component | undefined;
}
