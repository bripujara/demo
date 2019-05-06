import {Component} from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
    selector: 'courses',
    template: `
    <h2>{{title}}</h2>
    <ul>
        <li *ngFor="let course of courses">
        {{course}}
        </li>
    </ul>
    <table>
        <tr>
            <td [attr.colspan]="colSpan"></td>
        </tr>

    </table>
    <button class="btn btn-primary" [class.active]="isActive" >Save</button>
    <button class="btn btn-primary" [style.backgroundcolor]="isActive?'blue':'white'" >Save As</button>
    <div (click)="onDivClicked()">
    <button (click)="onSave($event)">New</button>
    </div>
    <input (keyup.enter)="onKeyUp($event)"/>
    <input #email (keyup.enter)="onKeyU(email.value)"/>
    <input [(ngModel)]="pwd" (keyup.enter)="onKeyPwd()"/><br>
    {{course.title | uppercase | lowercase}}<br>
    {{course.rating | number:'2.2-2'}}<br>
    {{course.students | number}}<br>
    {{course.price | currency:'INR':true:'3.2-2'}}<br>
    {{course.releaseDate | date:'shortDate'}}<br>
    {{text | summary:10}}
    `
})
export class CoursesComponent {
    title = 'List of courses';
    pwd = '@1234';
    courses;
    colSpan = 2;
    isActive = true;
    text = 'This text is so long so we need to summarize it through custom pipe named summary';

    course = {
        title: 'The Complete Angular Course',
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2018, 9, 1)
    };

   constructor(service: CoursesService) {
       this.courses = service.getCourses();
   }
    getTitle() {
        return this.title;
    }
    onDivClicked() {
        console.log('Div was clicked');
    }
    onSave($event) {
        $event.stopPropagation();
        console.log('Button was clicked', $event);
    }
    onKeyUp($event) {
        console.log($event.target.value);
    }
    onKeyU(email) {
        console.log(email);
    }
    onKeyPwd() {
        console.log(this.pwd);
    }
}
