import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';
import formatedData from 'src/app/data/formatedData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  private id: string | null = '0';
  photoCover: string = '';
  title: string = '';
  content: string = '';
  createdAt: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((data) => data.id == +id!)[0];
    this.title = result.title;
    this.content = result.content;
    this.photoCover = result.photo;
    this.createdAt = formatedData(result.createdAt);
  }
}
