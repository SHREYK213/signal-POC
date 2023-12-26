import { Component, computed, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup } from '@angular/forms';
import { SignalService } from 'src/app/services/signal.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component {
  constructor( private service:SignalService){

  }
  form2 = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  firstName = signal("")
  lastName = signal("")
  fullName=computed(()=>`${this.firstName()} ${this.lastName()}`)
  // formSignal= toSignal(this.form1.valueChanges)
  
  
  onSubmit(){
    // console.log(this.formSignal);
    this.service.form2Data.emit(this.fullName())
    console.log('this is from form2',this.form2.value)
    this.form2.reset()
  }
}
