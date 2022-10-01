import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My Components';
  activeTab: number = 0;
  paths: string[] = ['carousel', 'table'];
  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(({ url }: any) => url.split('/').at(-1))
      )
      .subscribe((url) => (this.activeTab = this.paths.indexOf(url)));
  }
}
