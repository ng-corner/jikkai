import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ScheduleHttpService } from '@core/http/anime';
import { Calendar } from '@core/model/anime';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit {
  daysOfWeek = [
    { ru: 'понедельник', eng: 'monday' },
    { ru: 'вторник', eng: 'tuesday' },
    { ru: 'среда', eng: 'wednesday' },
    { ru: 'четверг', eng: 'thursday' },
    { ru: 'пятница', eng: 'friday' },
    { ru: 'суббота', eng: 'saturday' },
    { ru: 'воскресенье', eng: 'sunday' }
  ];

  readonly testForm = new FormGroup({
    testValue: new FormControl(this.daysOfWeek[0]),
  });

  anime$: Observable<Calendar[]> | null = null;

  constructor(private schedulesHttpService: ScheduleHttpService) { }

  getAnimeByDay(day: string): void {
    this.anime$ = this.schedulesHttpService.getAnime(day).pipe(map((response: any) => response.data))

  }

  ngOnInit() {
    this.getAnimeByDay(this.daysOfWeek[0].eng)
  }
}

