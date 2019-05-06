import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input('is-course') isCourse: boolean;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isCourse = !this.isCourse;
    console.log(this.isCourse);
    this.change.emit({newValue: this.isCourse});
  }

}
export interface CourseChangedEventArgs {
  newValue: boolean;
}
