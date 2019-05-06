import { map, switchMap } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';
// import 'rxjs/add/observable/combineLatest';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];
  constructor(
    private route: ActivatedRoute,
    private service: GithubService) { }

  ngOnInit() {
    // combineLatest([
    //   this.route.paramMap,
    //   this.route.queryParamMap
    // ]).subscribe( combined => {
    //   let id= combined[0].get('id');
    //   let page = combined[1].get('page');

    //   this.service.getConfig()
    //     .subscribe(response => this.followers = (response as []));
    // });

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(switchMap(combined => {
      const id = combined[0].get('id');
      const page = combined[1].get('page');

      return this.service.getConfig();
    }))
    .subscribe( followers => {
      this.followers = followers;
    });



  }

}
