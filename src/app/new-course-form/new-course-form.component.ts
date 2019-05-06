import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TNodeProviderIndexes } from '@angular/core/src/render3/interfaces/node';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent  {
  constructor(fb: FormBuilder) {
    fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }

  // form=new FormGroup({
  //   topics: new FormArray([]),
  //   name: new FormControl(),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   })
  // });

  // addTopic(topic: HTMLInputElement){
  //   this.topics.push(new FormControl(topic.value));
  //   topic.value='';
  // }

  // get topics(){
  //   return this.form.get('topics') as FormArray;
  // }
  // removeTopic(topic:FormControl){
  //   let index=this.topics.controls.indexOf(topic) ;
  //   this.topics.removeAt(index);
  // }

}
