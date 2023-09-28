import { NgModule } from "@angular/core";
import { TUI_SANITIZER, TuiAlertModule, TuiButtonModule, TuiDialogModule, TuiPrimitiveTextfieldModule, TuiSvgModule } from "@taiga-ui/core";
import { TuiActionModule, TuiInputModule } from "@taiga-ui/kit";
import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";

@NgModule({
  declarations: [
  ],
  imports: [
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiActionModule,
    TuiInputModule,
    TuiSvgModule,
    TuiPrimitiveTextfieldModule,
  ],
  exports: [
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiActionModule,
    TuiInputModule,
    TuiSvgModule,
    TuiPrimitiveTextfieldModule
  ],
  providers: [
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer
    },
  ],

})
export class TuiComponentsModule { }
