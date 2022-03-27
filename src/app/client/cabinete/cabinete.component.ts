import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cabinete',
  templateUrl: './cabinete.component.html',
  styleUrls: ['./cabinete.component.css']
})
export class CabineteComponent {

  @Output()
  closeCabinetFunc = new EventEmitter()

  closeCabinet(value: boolean): void {
    this.closeCabinetFunc.emit(value)
  }
}
