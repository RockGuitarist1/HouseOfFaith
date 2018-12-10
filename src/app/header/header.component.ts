import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isCollapsed = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      if (!this.isCollapsed) { this.isCollapsed = true; }
    });
  }

  public navigate(path = '') {
    this.router.navigateByUrl(path);
  }

}
