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
  selectedTable=0;
  ngOnInit() {
    this.activeRoutedService.data.subscribe(data => {
       this.mService.next(Constants.TABLES);
    });
    this.selectedTable = Math.ceil(2 + (Math.random() * this.noOfQ));
    this.generate();
  }
  queryList: any[] = [];

  changeTable($event:any){
      console.log($event);
      this.generate();
  }
  generate() {
    this.queryList = [];
    for (let i = 1; i <= 20; i++) {
      let q = { 'ans': i*this.selectedTable, 'inputs': [i, this.selectedTable], 'status': '', 'no': i };
      this.queryList.push(q);
    }
  }
  validateAns($event: any, q: any) {
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
