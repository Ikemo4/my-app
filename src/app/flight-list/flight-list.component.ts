import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

import { flights } from '../flights';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent { //implements OnInit {
  flights = flights;

  // constructor() { }

  // ngOnInit(): void {
  // }

}

@Pipe({
  name: 'filterDelays'
})

export class FilterDelaysPipe implements PipeTransform {
  transform(values: any[], ...args: unknown[]): any[] {
    return values.filter(v => v.status == 'Delayed')
  }
}

@Pipe({
  name: 'filterOnTime'
})

export class FilterOnTimePipe implements PipeTransform {
  transform(values: any[], ...args: unknown[]): any[] {
    return values.filter(v => v.status == 'On Time')
  }
}