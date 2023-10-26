import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NightThemeService } from '@feature/night-theme/night-theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(@Inject(NightThemeService) readonly theme: NightThemeService) { }

  title: string = 'jikkai';
  menuItem = [
    { title: 'Главная', routerLink: '/' },
    { title: 'Все аниме', routerLink: '/' },
    { title: 'Расписание', routerLink: '/calendar' },
    { title: 'Рандом', routerLink: '/' },
    { title: 'Топ 100', routerLink: '/top100' },
  ];
  searchForm = new FormGroup({
    search: new FormControl('', Validators.required),
  })

}
