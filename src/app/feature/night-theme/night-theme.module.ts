import { NgModule } from "@angular/core";
import { TuiThemeNightModule, TuiModeModule } from "@taiga-ui/core";
import { NightThemeService } from "./night-theme.service";

@NgModule({
  providers: [NightThemeService],
  imports: [TuiThemeNightModule, TuiModeModule],
  exports: [TuiThemeNightModule, TuiModeModule],
})
export class NightThemeModule { }
