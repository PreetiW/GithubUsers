import { Component, Input, OnInit } from '@angular/core';
import { Repo } from 'src/app/types/repo-types';
import { rows, TableRow } from 'src/app/types/table-rows-types';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  selectedIndex;
  rows: TableRow[] = rows;

  @Input()
  repoDetailsList: Repo[];

  constructor() { }

  ngOnInit() {}

  toggleContent(index: string) {
    if (this.selectedIndex === index) {
      this.selectedIndex = null;
    } else {
      this.selectedIndex = index;
    }
  }

}
