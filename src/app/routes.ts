import { Routes } from '@angular/router'
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';

export const appRoutes: Routes = [
  //events
  //create event - also this is up here since angular doesn't know whether to pass create to id parm or go to that dir based on order
  { path: 'events/create', component: CreateEventComponent },
  //view events
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  //error pages
  { path: '404', component: Error404Component },


]
