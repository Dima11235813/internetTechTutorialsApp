import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../shared/event.service";
import { IEvent } from '../shared';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})

export class EventDetailsComponent {
  event: IEvent
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
    ){}
  ngOnInit(){
    this.event = this.eventService.getEvent(
      this.route.snapshot.params['id']
    )
  }

}
