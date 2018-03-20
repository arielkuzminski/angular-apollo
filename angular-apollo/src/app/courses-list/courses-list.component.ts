import { Course, Query } from './../types';
import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import gql from 'graphql-tag';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses: Course[];
  loading = true;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.fetchGraplQL();
  }

  fetchGraplQL() {

    this.apollo.watchQuery<Query>({
      query: gql`
        query allCourses {
          allCourses {
            id
            title
            author
            description
            topic
            url
          }
        }

      `
    }).valueChanges.subscribe((response) => {
      console.log(response);
      this.courses = response.data.allCourses;
      this.loading = response.data.loading;
    });
  }

}
