import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('headerSlider') headerSlider: IonSlides;
  @ViewChild('contentSlider') contentSlider: IonSlides;
  contentOpts: any = {
    controller: {
      control: this.headerSlider
    },
    slidesPerView: 1
  }
  headerOpts: any = {
    slidesPerView: 1
  }

  constructor() {}

}
