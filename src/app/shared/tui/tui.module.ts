import { NgModule } from "@angular/core";
import { TuiDialogModule, TuiAlertModule, TuiButtonModule } from "@taiga-ui/core";
import { TuiActionModule } from "@taiga-ui/kit";

@NgModule({
  imports: [
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiActionModule
  ],
  exports: [
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiActionModule
  ],
})
export class TuiComponentsModule { }
