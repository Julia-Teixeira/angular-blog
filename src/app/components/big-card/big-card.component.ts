import { Component, OnInit } from '@angular/core';
import formatedData from 'src/app/data/formatedData';
('../../data/formatedData');

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  newDate(date: string) {
    return formatedData(date);
  }
}
