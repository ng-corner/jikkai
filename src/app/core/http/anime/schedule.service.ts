import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ScheduleHttpService {
  constructor(private httpClient: HttpClient) { }

  getAnime(day: string) {
    return this.httpClient.get("schedules", { params: { filter: day } });
  }
}
