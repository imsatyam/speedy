import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-base64-encode',
  templateUrl: './base64-encode.component.html',
  styleUrls: ['./base64-encode.component.css']
})
export class Base64EncodeComponent implements OnInit {

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

  encode(data: string) {
    this.outputData = undefined;
    try {
      this.outputData = btoa(data);
    } catch(err) {
      console.log(err);
    }
  }

}
