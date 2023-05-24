import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  Control!: FormControl;
  form:FormGroup;

  constructor(private fb: FormBuilder,  private _router: Router,
    private _route: ActivatedRoute){

    this.form = this.fb.group({
      age:['', Validators.required],
      Sex:['', Validators.required],
      ChestPainType:['', Validators.required],
      RestingBP:['', Validators.required],
      Cholesterol:['', Validators.required],
      FastingBS:['', Validators.required],
      Re1ingECG:['', Validators.required],
      MaxHR:['', Validators.required],
      ExerciseA0gi0a:['', Validators.required],
      Oldpeak:['', Validators.required],
      ST_Slope:['', Validators.required],
    })

  }

  ngOnInit() {
    this.Control = new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('^[0-9]+$'),
    ]));

    this.Control.valueChanges.subscribe(value => {
      this.Control.updateValueAndValidity();
    });
  }




  filterInput(event: KeyboardEvent) {
    const input = event.key;
    const isNegativeSign = input === '-' && !this.Control.value.includes('-');
    if (isNegativeSign) {
      event.preventDefault();
    }
  }

  submitForm() {
    if (this.form.valid) {
      const formData = this.form.value;
      console.log(formData); // Aquí tienes tu objeto JSON con los datos del formulario
    }
  }
}
