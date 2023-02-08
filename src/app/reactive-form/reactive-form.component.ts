import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Entry } from '../shared/interfaces/entries.interface';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  values=['poor','fair','good','Excellent']
  entries: Entry[]=[];
 
  constructor() { }
  feedbackForm!:FormGroup
  ngOnInit(): void {
    this.createForm()
  }
  createForm(){
    this.feedbackForm=new FormGroup({
    firstName:new FormControl('',[Validators.required]),
    lastName:new FormControl('',[Validators.required]),
    phoneno:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    ques1:new FormControl(''),
    ques2:new FormControl(''),
    rating:new FormGroup({
      Exterior:new FormControl(""),
      Interior:new FormControl(""),
      Location:new FormControl(""),
      Amenities:new FormControl(""),
      Price:new FormControl(""),
      
      

    }),
      
    // radiobut4:new FormControl(''),
    // radiobut5:new FormControl(''),
    

    
    // placeholder pe jo dikhega usko fname hai
    })}
    get formControls(){
      return this.feedbackForm.controls;
    }
    submitForm(){
      console.warn(this.feedbackForm.value)
      this.entries.push(this.feedbackForm.value)
      console.log(this.entries)
     
      // console.warn(this.feedbackForm.get('radiobut4')?.value)
      // console.warn(this.feedbackForm.get('radiobut5')?.value)
      
    }  

 
}

