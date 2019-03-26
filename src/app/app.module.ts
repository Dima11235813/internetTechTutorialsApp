//angular
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from "@angular/router";
//app routes
import { appRoutes } from './routes';

//components
import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/nav-bar.component';

//3rd party services
import { ToastrService } from "./common/toastr.service";
import { Error404Component } from './errors/404.component';

//barrels
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  EventRouteActivator,
  EventListResolver,
} from './events/index'


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    NavBarComponent
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [
    EventsAppComponent
  ]
})
export class AppModule { }

export function checkDirtyState(
  component: CreateEventComponent
){
  //check if user made any changes
  if(component.isDirty){
    return window.confirm("You haven't saved this event, are you sure you want to leave this page?")
  }
  return true
}
