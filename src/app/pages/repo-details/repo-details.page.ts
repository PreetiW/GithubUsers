import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReposSearchService } from 'src/app/services/repos-search/repos-search.service';
import { Repo } from 'src/app/types/repo-types';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.page.html',
  styleUrls: ['./repo-details.page.scss'],
})
export class RepoDetailsPage implements OnInit {

  rows: any = [
    { property: 'name' },
    { property: 'description' },
    { property: 'stars' },
    { property: 'openIssues' },
    { property: 'watchers' },
  ];

  loadingRepoDetails = true;
  userName: string;
  repoDetailsList: Repo[];
  tableHeadings = ['Owner','Name', 'Description', 'Stars', 'Open issues', 'Watchers'];

  constructor(private repoSearchSvc: ReposSearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userName = params['user-name'];
      console.log("User Name:", this.userName);
      this.repoSearchSvc.getUserRepos(this.userName).subscribe((data) =>{
        this.loadingRepoDetails = false;
        this.repoDetailsList = data;
      });
    })
  }

}
