// form-data.service.ts
import { EventEmitter, Injectable ,signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignalService {
    form1Data=new EventEmitter<any>()
    form2Data=new EventEmitter<any>()
}
