import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  Control!: FormControl;
  form: FormGroup;
  responseText: string = '';
  rest: string = '';

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {
    this.form = this.fb.group({
      age: ['', Validators.required],
      gender: ['', Validators.required],
      chestPain: ['', Validators.required],
      bloodPressure: ['', Validators.required],
      cholesterol: ['', Validators.required],
      bloodSugar: ['', Validators.required],
      electroResult: ['', Validators.required],
      maxHeartRate: ['', Validators.required],
      exerciseAngina: ['', Validators.required],
      oldPeakST: ['', Validators.required],
      slopeSTSegment: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.Control = new FormControl(null, Validators.compose([
      Validators.required,
      Validators.pattern('^[0-9]+$')
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
      console.log(this.form.value);
      this.http.post('http://localhost:8080/test', this.form.value).subscribe(response => {
        // Maneja la respuesta del backend aquí
        console.log(response);
        this.openDialog(response);
      });
    }
  }

  openDialog(response: number | Object): void {
    let message: string;
    if (typeof response === 'number') {
      if (response === 0) {
        message = 'Su estado de salud es NORMAL';
      } else if (response === 1) {
        message = '¡Usted padece de una enfermedad Cardiaca!';
      } else {
        message = 'Respuesta desconocida';
      }
    } else {
      message = 'Respuesta desconocida';
    }

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: message
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Diálogo cerrado');
    });
  }
}
