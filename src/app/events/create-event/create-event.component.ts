import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-event.component.html'
})

export class CreateEventComponent {
  isDirty:boolean = true
  constructor(
    private router: Router
  ){

  }
  cancel(){
    //set
    this.router.navigate(['./events']) //if you're navigating some where why would you need an array of urls ??
  }
}
