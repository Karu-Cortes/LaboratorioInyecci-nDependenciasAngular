import { Component, OnInit } from '@angular/core';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(private showService: ShowService) { }

  ngOnInit(): void {
  }

  get items() {
    return this.showService.items;
  }
}
