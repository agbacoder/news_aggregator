import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styles: ``
})
export class AlertComponent {

@Input()  messageColor = ''

get bgColor(){
  return `bg-${this.messageColor}-400`
}

}
