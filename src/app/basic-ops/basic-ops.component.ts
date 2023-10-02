import { Component, EventEmitter, Output } from '@angular/core';
import { Constants } from '../constnants';
import { ActivatedRoute } from '@angular/router';
import { MathService } from '../math-service.service';

@Component({
  selector: 'basic-ops',
  templateUrl: './basic-ops.component.html',
  styleUrls: ['./basic-ops.component.scss']
})

export class AdditionComponent {
  numRange = 100;
  noOfQ = 30;
  passed = 0;
  failed = 0;
  @Output() opTypeChange = new EventEmitter<string>();
  queryList: any[] = [];

  constructor(private activeRoutedService : ActivatedRoute, private mService: MathService) {
  }
  opType = Constants.ADD;
  opSymbol = '+';

  ngOnInit() {
    this.opType = this.activeRoutedService.snapshot.data['opType'];
    this.activeRoutedService.data.subscribe(data => {
      this.opType = data['opType'];
       this.mService.next(this.opType);
    });
    if (!this.opType) {
      this.opType = Constants.ADD
    }
    if (this.opType == Constants.SUB) {
      this.opSymbol = '-';
    } else if (this.opType == Constants.MUL) {
      this.opSymbol = '*';
    }
    this.generate();
  }
  generate() {
    let subList = []
    for (let i = 1; i <= this.noOfQ; i++) {
      let n1 = Math.floor(Math.random() * this.numRange);
      let n2 = Math.floor(Math.random() * this.numRange);
      if (this.opType == Constants.SUB && n1 < n2) {
        let t = n2;
        n2 = n1;
        n1 = t;
      }
      let q = { 'ans': this.getAns(n1, n2), 'inputs': [n1, n2], 'status': '', 'no': i };
      subList.push(q);
      if (subList.length >= 4) {
        this.queryList.push(subList);
        subList = [];
      }
    }
    this.queryList.push(subList);
  }
  getAns(n1: number, n2: number) {
    if (this.opType == Constants.ADD) {
      return n1 + n2;
    }
    if (this.opType == Constants.SUB) {
      return n1 - n2;
    }
    if (this.opType == Constants.MUL) {
      return n1 * n2;
    }
    return 0;
  }
  validateAns($event: any, q: any) {
    console.log($event.target.value);
    console.log(q);
    if (q.ans == $event.target.value) {
      q.status = 'S';
    } else {
      q.status = 'F';
    }
    this.updateStatus();
  }
  updateStatus(this: any) {
    let pass = 0;
    let fail = 0;
    for (let subList of this.queryList) {
      for (let q of subList) {
        if (q.status == 'S') pass++;
        if (q.status == 'F') fail++;
      }
    }
    this.passed = pass;
    this.failed = fail;
  }

}


