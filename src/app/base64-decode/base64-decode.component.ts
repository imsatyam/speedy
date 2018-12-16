import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-base64-decode',
  templateUrl: './base64-decode.component.html',
  styleUrls: ['./base64-decode.component.css']
})
export class Base64DecodeComponent implements OnInit {

  dataForm: FormGroup;
  outputData: any;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.dataForm = this.formBuilder.group({
      inputData: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

  decode(data: string) {
    this.outputData = undefined;
    try {
      this.outputData = atob(data);
    } catch(err) {
      console.log(err);
    }
  }
}
