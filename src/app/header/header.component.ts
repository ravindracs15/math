import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MathService } from '../math-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private mService: MathService) {
  }
  selPath ='';
  changeMathType(val: string) {
    this.selPath = val;
    this.router.navigate([val], { relativeTo: this.activatedRoute, queryParamsHandling: 'preserve' });
  }

  ngOnInit() {
    this.mService.select().subscribe(v => {
      this.selPath = v;
    })
  }
}

