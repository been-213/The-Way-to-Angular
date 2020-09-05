import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() { }
  message: String;
  show: Boolean = false;

  alert(message:String) {
    this.message = message;
    this.show = true;
    setTimeout(()=> {
      this.show = false;
    },2000)
  }
}
