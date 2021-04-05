import { Component, Input, OnInit } from '@angular/core';
import { Repo } from 'src/app/types/repo-types';
import { rows, TableRow } from 'src/app/types/table-rows-types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  rows: TableRow[] = rows;
  tableHeadings = ['Owner','Name', 'Description', 'Stars', 'Open issues', 'Watchers'];

  @Input()
  repoDetailsList: Repo[];
  
  constructor() { }

  ngOnInit() {}

}
