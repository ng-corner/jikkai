import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AnimeHttpService {
  constructor(private httpClient: HttpClient) { }

  getAnime(id: number) {
    return this.httpClient.get(`anime/${id}`);
  }
}
