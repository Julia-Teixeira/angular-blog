import { Component, OnInit } from '@angular/core';
import formatedData from 'src/app/data/formatedData';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  newDate(date: string) {
    return formatedData(date);
  }
}
