import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterHelper } from '../../../shared/helpers/router-helpers';

@Component({
  selector: 'app-error-page',
  templateUrl: 'error-page.component.html',
  styleUrls: ['error-page.component.scss'],
})
export class ErrorPageComponent implements OnInit {
  @Input() statusCode: string;
  @Input() statusCodeMessage: string;
  @Input() errorMessage: string;
  @Input() buttonText: string;
  @Input() buttonUrl: string;

  constructor(private router: Router, private routerHelper: RouterHelper) {}

  ngOnInit() {}

  back() {
    switch (this.statusCode) {
      case '401':
        this.router.navigate(['/']);
        break;

      case '423':
        this.router.navigate(['/dictionaries']);
        break;

      default:
        this.routerHelper.routeBack();
        break;
    }
  }
}
