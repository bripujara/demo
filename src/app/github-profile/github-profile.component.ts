import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // let id =this.route.snapshot.paramMap.get('id');
    // console.log(id);

  }
  submit() {
    this.router.navigate(['/followers'], {
      queryParams: {page: 1 , order: 'newest'}
    });
  }

}
