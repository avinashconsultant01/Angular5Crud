import { Component,Input } from '@angular/core';
// Import the Router and navigation events
import {
  Router, NavigationStart, NavigationEnd,
  NavigationCancel, NavigationError, Event
} from '@angular/router';

@Component({
  selector: 'app-root',
  // //templateUrl: './app.component.html',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
