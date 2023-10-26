import { NgModule } from "@angular/core";
import { TUI_SANITIZER, TuiAlertModule, TuiButtonModule, TuiDialogModule, TuiGroupModule, TuiPrimitiveTextfieldModule, TuiSvgModule } from "@taiga-ui/core";
import { TuiActionModule, TuiInputModule, TuiPaginationModule, TuiRadioBlockModule, TuiRadioModule } from "@taiga-ui/kit";
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
    TuiGroupModule,
    TuiRadioBlockModule,
    TuiPaginationModule
  ],
  exports: [
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiActionModule,
    TuiInputModule,
    TuiSvgModule,
    TuiPrimitiveTextfieldModule,
    TuiGroupModule,
    TuiRadioBlockModule,
    TuiPaginationModule
  ],
  providers: [
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer
    },
  ],

})
export class TuiComponentsModule { }
