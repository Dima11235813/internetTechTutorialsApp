import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';
//3rd party services
import { ToastrService } from "../common/toastr.service";
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared';

//this is done so angular knows that toastr is available as a global var
//declare let toastr
//but it's bad style to have vars in the global namespace

@Component({
  templateUrl: './event-list.component.html'
})
export class EventsListComponent implements OnInit{
  events:IEvent

  constructor(
    private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute
    ){}
  //TODO Check on difference of arrow func in angular
  // ngOnInit = () => {
    //broke build - maybe angular build process doesn't support ES6
  ngOnInit(){
    // this.events = this.eventService.getEvents()
    // this.eventService.getEvents().subscribe(events => {
    //   this.events = events
    // })
    this.events = this.route.snapshot.data['events']
  }
  handleThumbnailClick(name){
    this.toastr.success(name)
  }
}
