import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];

  constructor() { 

  }
  

  ngOnInit() {
  }

  spaceDebrisCounter(satellites): number {

    let counter = 0;
    
    for (let satellite of satellites) {

      if (satellite.type === 'Space Debris') {

        counter++;

      }


    }

    return counter;

  }

  communcationCounter(satellites): number {

    let counter = 0;

    for (let satellite of satellites) {

      if (satellite.type === 'Communication') {

        counter++;

      }

    }

    return counter;

  }

  probeCounter(satellites): number {

    let counter = 0;

    for (let satellite of satellites) {

      if (satellite.type === 'Probe') {

        counter++;

      }

    }

    return counter;

  }

  positioningCounter(satellites): number {

    let counter = 0;

    for (let satellite of satellites) {

      if (satellite.type === 'Positioning') {

        counter++;

      }

    }

    return counter;

  }

  spaceStationCounter(satellites): number {

    let counter = 0;

    for (let satellite of satellites) {

      if (satellite.type === 'Space Station') {

        counter++;

      }

    }

    return counter;

  }

  telescopeCounter(satellites): number {

    let counter = 0;

    for (let satellite of satellites) {

      if (satellite.type === 'Telescope') {

        counter++;

      }

    }

    return counter;

  }
  
}
