import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventService } from './shared/event.service'
import { map } from "rxjs/operators";

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor( private eventService: EventService){

  }
  resolve(){
    //async ajax call here
    //this code maps over each received event and returns it
    //normally in a resolve you would subscribe but since we're using observables
    //we have to return the observable so angular can watch for updates
    return this.eventService.getEvents().pipe(map(events => events))
  }
}
