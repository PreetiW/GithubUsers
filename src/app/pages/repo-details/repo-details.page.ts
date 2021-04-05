import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReposSearchService } from 'src/app/services/repos-search/repos-search.service';
import { Repo } from 'src/app/types/repo-types';
import { rows, TableRow } from 'src/app/types/table-rows-types';


@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.page.html',
  styleUrls: ['./repo-details.page.scss'],
})
export class RepoDetailsPage implements OnInit {
  
  userName: string;
  repoDetailsList: Repo[];
  loadingRepoDetails = true;
 

  constructor(private repoSearchSvc: ReposSearchService, 
                    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userName = params['user-name'];
      
      this.repoSearchSvc.getUserRepos(this.userName).subscribe((data) =>{
        this.loadingRepoDetails = false;
        this.repoDetailsList = data;
      });
    })
  }

  

}
