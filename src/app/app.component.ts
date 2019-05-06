import { CourseChangedEventArgs } from './course/course.component';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trialProj';
  courses = [1, 2, 3];
  viewMode = 'somethingElse';
  post = {
    title: 'Title',
    isCourse: true
  };
  subjects;
  canSave = false;
  task = {
    title: 'Review',
    assignee: {
      name: 'John Smith'
    }
  };
  onCourseChanged(eventArgs: CourseChangedEventArgs) {
    console.log('Course changed', eventArgs);
  }
  onAdd() {
    this.subjects.push({id: 4, name: 'subject4'});
  }
  onRemove(subject) {
    const index = this.subjects.indexOf(subject);
    this.subjects.splice(index, 1);
  }
  onChange(subject) {
    subject.name = 'UPDATED';
  }

  loadSubjects() {
    this.subjects = [
      {id: 1, name: 'subject1'},
      {id: 2, name: 'subject2'},
      {id: 3, name: 'subject3'}
    ];
  }
  trackSubject(index, subject) {
      return subject ? subject.id : undefined;
  }
}
