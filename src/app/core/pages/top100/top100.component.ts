import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Top100HttpService } from '@core/http/anime/top100.service';
import { Calendar } from '@core/model/anime';
import { Observable, map } from 'rxjs';



@Component({
  selector: 'top100',
  templateUrl: './top100.component.html',
  styleUrls: ['./top100.component.less'],

})
export class Top100 implements OnInit {
  title = 'Top 100'
  length = 25;
  anime: Calendar[] = [];
  index = 0;

  anime$: Observable<Calendar[]> | null = null;

  constructor(private top100HttpService: Top100HttpService) { }
  goToPage(index: number): void {
    this.index = index;
    console.info('New page:', index);
  }
  Top100(page: number): void {
    this.anime$ = this.top100HttpService.getAnime(page).pipe(map((response: any) => response.data))

  }
  ngOnInit(): void {
    this.Top100(0)
  }
}
