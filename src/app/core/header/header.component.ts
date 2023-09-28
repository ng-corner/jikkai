import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  title: string = 'jikkai';
  menuItem = [
    { title: 'Главная', routerLink: '/' },
    { title: 'Все аниме', routerLink: '/' },
    { title: 'Расписание', routerLink: '/' },
    { title: 'Рандом', routerLink: '/' },
    { title: 'Топ 100', routerLink: '/' },
  ];
  searchForm = new FormGroup({
    search: new FormControl('', Validators.required),
  })
}
