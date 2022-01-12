import { Component } from '@angular/core';
import { MatSliderChange } from "@angular/material/slider";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sliderVal: Number = 50;
  option:boolean = false;

  updateSlider(event: MatSliderChange) {
    this.sliderVal = event.value;
  }
}
