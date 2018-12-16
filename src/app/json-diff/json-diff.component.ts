import { Component, OnInit } from '@angular/core';
import { ComparisonPayload } from '../model/comparisonPayload';

@Component({
  selector: 'app-json-diff',
  templateUrl: './json-diff.component.html',
  styleUrls: ['./json-diff.component.css']
})
export class JsonDiffComponent implements OnInit {

  dataComparison: ComparisonPayload;
  outputData: any;


  constructor() {
    this.dataComparison = new ComparisonPayload();
    this.dataComparison.first = "";
    this.dataComparison.second = "";
  }

  ngOnInit() {
  }

}
