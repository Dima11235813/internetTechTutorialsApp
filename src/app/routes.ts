import { Routes } from '@angular/router'
import { Error404Component } from './errors/404.component';
import {
  EventRouteActivator,
  EventListResolver ,
  CreateEventComponent,
  EventDetailsComponent,
  EventsListComponent
} from './events/index'


export const appRoutes: Routes = [
  //events
  //create event - also this is up here since angular doesn't know whether to pass create to id parm or go to that dir based on order
  { path: 'events/create', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  //view events
  { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver}},
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  //error pages
  { path: '404', component: Error404Component },
  { path: 'user', loadChildren: './user/user.module#UserModule'}


]
