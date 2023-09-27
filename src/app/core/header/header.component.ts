import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  search: string = '';
  menuItem = [
    {tile:'Главная', routerLink:'/'},
    {tile:'Все аниме', routerLink:'/'},
    {tile:'Расписание', routerLink:'/'},
    {tile:'Рандом', routerLink:'/'},
    {tile:'Топ 100', routerLink:'/'},
  ];
}
