import { Component, OnInit } from '@angular/core';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  constructor(private showService: ShowService) { }

  ngOnInit(): void {
  }

  get items() {
    return this.showService.items;
  }
}
