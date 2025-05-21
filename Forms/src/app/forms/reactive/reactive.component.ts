import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-reactive",
  templateUrl: "./reactive.component.html",
  styleUrls: ["./reactive.component.css"],
})
export class ReactiveComponent implements OnInit {
  [x: string]: any;
  genders = ["male", "female"];
  signupForm: FormGroup;
  forbiddenUsernamed = ["jaymin", "jaymeen"];

  constructor() {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null,[Validators.required, this.forbiddenNames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      gender: new FormControl("male"),
      hobbies: new FormArray([]),
    });

    // this.signupForm.statusChanges.subscribe((data)=> console.log(data))
    // this.signupForm.valueChanges.subscribe((data) => console.log(data))
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  getControls() {
    return (<FormArray>this.signupForm.get("hobbies")).controls;
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get("hobbies")).push(control);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if(this.forbiddenUsernamed.indexOf(control.value) !== -1){
      return {'nameIsForbidden':true};
    }
    return null;
  }

  forbiddenEmails(control : FormControl) : Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com'){
          resolve({'emailIsForbidden' : true});
        }else{
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}
