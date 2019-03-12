//angular
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from "@angular/router";
//app routes
import { appRoutes } from './routes';

//components
import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/nav-bar.component';

//services
import { EventService } from './events/shared/event.service'
import { EventDetailsComponent } from "./events/event-details/event-details.component";

//error route activator
import { EventRouteActivator } from './events/event-details/event-route-activator.service';

//3rd party services
import { ToastrService } from "./common/toastr.service";
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/404.component';


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
    EventRouteActivator
  ],
  bootstrap: [
    EventsAppComponent
  ]
})
export class AppModule { }
