import { NgModule } from "@angular/core";
import { TuiDialogModule, TuiAlertModule, TuiButtonModule } from "@taiga-ui/core";
import { TuiActionModule, TuiInputModule } from "@taiga-ui/kit";

@NgModule({
  imports: [
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiActionModule,
    TuiInputModule
  ],
  exports: [
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiActionModule,
    TuiInputModule
  ],
})
export class TuiComponentsModule { }
