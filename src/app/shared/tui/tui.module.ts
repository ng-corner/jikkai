import { NgModule } from "@angular/core";
import { TuiDialogModule, TuiAlertModule, TuiButtonModule, TuiSvgModule } from "@taiga-ui/core";
import { TuiActionModule, TuiInputModule } from "@taiga-ui/kit";

@NgModule({
  imports: [
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiActionModule,
    TuiInputModule,
    TuiSvgModule
  ],
  exports: [
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiActionModule,
    TuiInputModule,
    TuiSvgModule,
  ],
})
export class TuiComponentsModule { }
