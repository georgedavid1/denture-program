import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patientForm: any;

  constructor(private fb: FormBuilder){
      this.patientForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      address: ['', Validators.required]
    });

  }

  ngOnInit() {

  }
  submit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.patientForm.value);
  }
}
