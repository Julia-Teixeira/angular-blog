import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';
import formatedData from 'src/app/data/formatedData';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  dataFake = dataFake.filter((post) => post.id > 1 && post.id < 5);
  constructor() {}

  ngOnInit(): void {}
  newDate(date: string) {
    return formatedData(date);
  }
}
