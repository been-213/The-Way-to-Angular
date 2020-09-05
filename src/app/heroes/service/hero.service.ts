import { Injectable } from '@angular/core';
import { heroes } from '../mock-data';
import { Hero } from '../hero';
import { MessageService } from 'src/app/messages/service/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }

  getHeroes() {
  return new Promise((resolve:(value:Hero[])=>void) => {
    this.messageService.alert('HeroService: fetched heroes');
    resolve(heroes);
  })
  }

}
