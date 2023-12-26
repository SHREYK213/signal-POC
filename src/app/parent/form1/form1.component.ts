import { Component, computed, signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { SignalService } from 'src/app/services/signal.service';


@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component {
  constructor(private service: SignalService){

  }
  form1 = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  firstName = signal("")
  lastName = signal("")
  fullName=computed(()=>`${this.firstName()} ${this.lastName()}`)
  // formSignal= toSignal(this.form1.valueChanges)
  
  
  onSubmit(){
    // console.log(this.formSignal);
    this.service.form1Data.emit(this.fullName())
    console.log('this is from form1',this.form1.value)
    this.form1.reset()
  }
}
