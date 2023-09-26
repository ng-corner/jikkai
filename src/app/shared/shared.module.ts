import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TuiComponentsModule } from "./tui/tui.module";

@NgModule({
  imports: [TuiComponentsModule, FormsModule],
  exports: [TuiComponentsModule, FormsModule],
})
export class SharedModule { }
