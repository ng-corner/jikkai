import { Component, Inject } from '@angular/core';
import { NightThemeService } from '@feature/night-theme/night-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(@Inject(NightThemeService) readonly theme: NightThemeService) { }
  title = 'jikkai';
}
