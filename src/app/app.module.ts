import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { Form1Component } from './parent/form1/form1.component';
import { Form2Component } from './parent/form2/form2.component';
import { DisplayComponent } from './parent/display/display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import{MatButtonModule} from '@angular/material/button'
import { SignalService } from './services/signal.service';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Form1Component,
    Form2Component,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule

  ],
  providers: [SignalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
