import { Component, Input } from '@angular/core';


@Component({
  selector: 'anime-card',
  templateUrl: './animecard.component.html',
  styleUrls: ['./animecard.component.less'],

})
export class AnimeCard {
  title = 'Top 100'
  @Input() anime: any
}
