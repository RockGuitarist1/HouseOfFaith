import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigationService {
  constructor(private router: Router) { }

  public navigate(path = '') {
    this.router.navigateByUrl(path);
  }
}
