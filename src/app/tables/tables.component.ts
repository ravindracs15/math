import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MathService } from '../math-service.service';
import { Constants } from '../constnants';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent {
  passed = 0;
  failed = 0;
  noOfQ=20;
  constructor(private activeRoutedService : ActivatedRoute, private mService: MathService) {
  }
  ngOnInit() {
    this.activeRoutedService.data.subscribe(data => {
       this.mService.next(Constants.TABLES);
    });
    this.generate();
  }
  queryList: any[] = [];

  generate() {
    let n1 = Math.ceil(Math.random() * this.noOfQ);
    n1 = Math.max(n1, 2);
    for (let i = 1; i <= 20; i++) {
      let q = { 'ans': i*n1, 'inputs': [i, n1], 'status': '', 'no': i };
      this.queryList.push(q);
    }
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
    for (let q of this.queryList) {
      if (q.status == 'S') pass++;
        if (q.status == 'F') fail++;
    }
    this.passed = pass;
    this.failed = fail;
  }
}
