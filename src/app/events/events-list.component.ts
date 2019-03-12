import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';
//3rd party services
import { ToastrService } from "../common/toastr.service";

//this is done so angular knows that toastr is available as a global var
//declare let toastr
//but it's bad style to have vars in the global namespace

@Component({
  selector: 'events-list',
  templateUrl: './event-thumbnail.component.html'
})
export class EventsListComponent implements OnInit{
  events:any[]

  constructor(
    private eventService: EventService,
    private toastr: ToastrService
    ){}
  //TODO Check on difference of arrow func in angular
  // ngOnInit = () => {
    //broke build - maybe angular build process doesn't support ES6
  ngOnInit(){
    this.events = this.eventService.getEvents()
  }
  handleThumbnailClick(name){
    this.toastr.success(name)
  }
}
