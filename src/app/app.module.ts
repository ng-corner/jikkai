import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { apiInterceptor } from '@core/interceptor/api.interceptor';
import { ENVIRONMENT } from '@feature/environment/environment.service';
import { SharedModule } from '@shared/shared.module';
import { TuiRootModule } from "@taiga-ui/core";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from '@core/pages/calendar/calendar.component';
import { HeaderComponent } from './core/components/header/header.component';
import { environment } from './environments/environment.development';
import { Top100 } from '@core/pages/top100/top100.component';
import { AnimeCard } from '@core/components/AnimeCard/animecard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalendarComponent,
    Top100,
    AnimeCard
  ],
  providers: [
    { provide: ENVIRONMENT, useValue: environment },
    provideHttpClient(withInterceptors([apiInterceptor]))
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    SharedModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
