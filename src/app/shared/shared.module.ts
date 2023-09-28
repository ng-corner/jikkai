import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TuiComponentsModule } from "./tui/tui.module";
import { NightThemeModule } from "@feature/night-theme/night-theme.module";

@NgModule({
  imports: [TuiComponentsModule, NightThemeModule, FormsModule, ReactiveFormsModule],
  exports: [TuiComponentsModule, NightThemeModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule { }
