import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Calendar } from '@core/model/anime';
import { Observable } from 'rxjs';

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
  allAnime: Calendar[] = []

  constructor(private http: HttpClient) { }
  getCalendar(day: string): Observable<any> {
    const url = `https://api.jikan.moe/v4/schedules?filter=${day}`
    return this.http.get(url);
  }
  Calendar(day: string) {
    this.getCalendar(day).subscribe((data) => {
      this.allAnime = data.data
    })
  }
  ngOnInit() {
    this.getCalendar('monday').subscribe((data) => {
      this.allAnime = data.data
    })
  }
}
