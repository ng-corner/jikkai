import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TuiComponentsModule } from "./tui/tui.module";

@NgModule({
  imports: [TuiComponentsModule, FormsModule, ReactiveFormsModule],
  exports: [TuiComponentsModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule { }
