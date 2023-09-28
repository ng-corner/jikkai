import { Inject, Injectable } from "@angular/core";
import { TuiThemeNightService } from "@taiga-ui/addon-doc";
import { TuiBrightness } from "@taiga-ui/core";

@Injectable({
  providedIn: 'root'
})
export class NightThemeService {
  constructor(@Inject(TuiThemeNightService) readonly night: TuiThemeNightService) { }

  get mode(): TuiBrightness {
    return this.night.value ? 'onDark' : 'onLight';
  }
}
