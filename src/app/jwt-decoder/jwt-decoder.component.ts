import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Payload } from '../model/payload';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-jwt-decoder',
  templateUrl: './jwt-decoder.component.html',
  styleUrls: ['./jwt-decoder.component.css']
})
export class JwtDecoderComponent implements OnInit {

  dataForm: FormGroup;
  outputData: any;
  isLoadingResults = false;

  constructor(private api: ApiService, private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.dataForm = this.formBuilder.group({
      inputData: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

  decodeJWT(data: string) {
    this.isLoadingResults = true;
    this.outputData = undefined;
    this.api.doJWTDecode({ data: data })
      .subscribe(res => {
          this.outputData = res;
          this.isLoadingResults = false;
        }, (err) => {
          this.outputData = undefined;
          console.log(err);
          this.isLoadingResults = false;
        });
  }
}
