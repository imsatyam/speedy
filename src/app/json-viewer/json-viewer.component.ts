import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.css']
})
export class JsonViewerComponent implements OnInit {

  dataForm: FormGroup;
  outputJson: any;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.dataForm = this.formBuilder.group({
      inputJson: ['', Validators.required ]
    });
  }

  ngOnInit() {
    // for now - nothing to do
  }

  prettyPrint(data: string) {
    this.outputJson = undefined;
    try {
      this.outputJson = JSON.parse(data);
    } catch(err) {
      console.log(err);
    }
  }

}
