import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
   defaultQuestion = 'pet';
    answer = '';
    genders = ['male', 'female'];
  
    submitted = false;
  
    user = {
      username : '',
      email : '',
      secretQuestion : '',
      answer : '',
      gender : ''
    }
    
  
    suggestUserName() {
      const suggestedName = "Superuser";
      // this.signupForm.setValue({
      //   userData:{
      //     username : suggestedName,
      //     email: ''
      //   },
      //   secret : 'teacher',
      //   questionAnswer : '',
      //   gender : 'male'
      // })
      this.signupForm.form.patchValue({
        userData : {
          username : suggestedName
        }
      })
    }
  
    @ViewChild('f') signupForm : NgForm;
  
    onSubmit(form ?: NgForm){
      this.submitted = true;
      console.log(this.signupForm.value)
      this.user.username = this.signupForm.value.userData.username;
      this.user.email = this.signupForm.value.userData.email;
      this.user.secretQuestion = this.signupForm.value.secret;
      this.user.answer = this.signupForm.value.questionAnswer;
      this.user.gender = this.signupForm.value.gender;
      this.signupForm.reset();
    }

  constructor() { }

  ngOnInit(): void {
  }

}
