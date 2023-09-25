import { NgModule } from "@angular/core";
import { TuiComponentsModule } from "./tui/tui.module";

@NgModule({
  imports: [TuiComponentsModule],
  exports: [TuiComponentsModule],
})
export class SharedModule { }
