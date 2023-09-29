import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }
  selPath ='';
  changeMathType(val: string) {
    this.selPath = val;
    this.router.navigate([val], { relativeTo: this.activatedRoute, queryParamsHandling: 'preserve' });
  }

  ngOnInit() {
    this.selPath = window.location.pathname.split('/')[1]
  }
}

