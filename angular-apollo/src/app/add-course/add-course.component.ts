import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';

import gql from 'graphql-tag';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  title: string;
  description: string;

  submitCourseMutation = gql`
    mutation createPost {
      createPost(title: ) {
        id
      }
    }
  `;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
  }

  submitCourse() {

    this.apollo.mutate({
      mutation: this.submitCourseMutation
    }).subscribe();

  }

}
